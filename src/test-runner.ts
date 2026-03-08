// styles
import style from './test-runner.css?raw';
// html
import html from './test-runner.html?raw';

import '@magnit-ce/code-tests';
// icons
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from 'ce-part-utils';
import { CodeTestElement, CodeTestEvent, CodeTestsElement, createElementFromTemplate, type GroupTestResults } from '@magnit-ce/code-tests';

export type TestRunnerState =
{
    isCanceled: boolean,
    isRunning: boolean,
}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
`;

const COMPONENT_TAG_NAME = 'test-runner';
export class TestRunnerElement extends HTMLElement
{
    state: TestRunnerState = 
    { 
        isCanceled: false,
        isRunning: false,
    };
        
    setState(state: TestRunnerState)
    {
        this.state = state;
        this.#render();
    }
    setStateProperties(state: Partial<TestRunnerState>)
    {
        this.setState({
            ...this.state,
            ...state
        });
    }

    findElement<T extends HTMLElement = HTMLElement>(query: string) { return this.shadowRoot!.querySelector(query) as T; }
    findElements<T extends HTMLElement = HTMLElement>(query: string) { return Array.from(this.shadowRoot!.querySelectorAll(query) as Iterable<T>) as Array<T>; }
    
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    }

    connectedCallback()
    {
        this.#init();
    }
    disconnectedCallback()
    {
        this.#destroy();
    }

    #init()
    {
        this.addEventListener('click', this.#boundClickHandler);
        this.addEventListener(CodeTestEvent.Init, this.#boundInitHandler);
        this.addEventListener(CodeTestEvent.Enabled, this.#boundEnabledHandler);
        this.addEventListener(CodeTestEvent.AfterTest, this.#boundAfterTestHander);
        this.addEventListener(CodeTestEvent.PromptInject, this.#boundPromptInjectHander);
        const subjectSlot = this.findElement<HTMLSlotElement>('#subject-slot');
        subjectSlot.addEventListener('slotchange', this.#boundSlotChangeHandler);

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }
    #destroy()
    {
        this.removeEventListener('click', this.#boundClickHandler);
        this.removeEventListener(CodeTestEvent.Init, this.#boundInitHandler);
        this.removeEventListener(CodeTestEvent.Enabled, this.#boundEnabledHandler);
        this.removeEventListener(CodeTestEvent.AfterTest, this.#boundAfterTestHander);
        this.removeEventListener(CodeTestEvent.PromptInject, this.#boundPromptInjectHander);
        const subjectSlot = this.findElement<HTMLSlotElement>('#subject-slot');
        subjectSlot.removeEventListener('slotchange', this.#boundSlotChangeHandler);
    }

    #render()
    {
        const isRunning = this.state.isRunning;
        const resultCategory = this.getResultCategory();

        this.classList.toggle('canceled', this.state.isCanceled);
        this.part.toggle('canceled', this.state.isCanceled);

        this.classList.toggle('running', isRunning == true);
        this.part.toggle('running', isRunning == true);
        this.toggleAttribute('success', resultCategory == 'success');
        this.classList.toggle('success', resultCategory == 'success');
        this.part.toggle('success', resultCategory == 'success');
        this.classList.toggle('fail', resultCategory == 'fail');
        this.part.toggle('fail', resultCategory == 'fail');

        const runAllButtonLabel = this.findElement('#run-button-label');
        if(runAllButtonLabel != null)
        {
            runAllButtonLabel.textContent = isRunning == true
            ? "Cancel"
            : (resultCategory == 'fail')
            ? "Reset"
            : "Run All Tests";
            runAllButtonLabel.title = isRunning == true
            ? "Cancel the testing"
            : (resultCategory == 'fail')
            ? "Reset the tests so they can be run again"
            : "Run the tests";
        }
        const runAllIcon = this.findElement('.run-all-button-icon');
        if(runAllIcon != null)
        {
            runAllIcon.innerHTML = isRunning == true
            ? '<use href="#icon-definition_cancel"></use>'
            : (resultCategory == 'fail')
            ? '<use href="#icon-definition_reset"></use>'
            : '<use href="#icon-definition_arrow"></use>';
        }
    }
    #renderGroupResults()
    {
        const results = this.collectTestResults();

        const progress = this.findElement<HTMLProgressElement>('#results-progress-value');
        if(progress != null)
        {
            progress.max = results.totalTests;
            progress.value = results.totalPassed;
        }
        const totalPassedElement = this.findElement('#total-tests-passed-value');
        if(totalPassedElement != null)
        {
            totalPassedElement.textContent = results.totalPassed.toString();
        }
        const totalTestsElement = this.findElement('#total-tests-count-value');
        if(totalTestsElement != null)
        {
            totalTestsElement.textContent = results.totalTests.toString();
        }
        const totalPercentElement = this.findElement('#passed-total-percent-value');
        if(totalPercentElement != null)
        {
            totalPercentElement.textContent = results.totalPercentage.toFixed(1);
        }
        const durationElement = this.findElement('#duration-value');
        if(durationElement != null)
        {
            durationElement.textContent = results.duration > 10 ? results.duration.toFixed(0) : results.duration.toFixed(2);
        }
    }
    collectTestResults()
    {
        const testGroups = this.findElements<CodeTestsElement>('code-tests');
        
        let totalTests = 0;
        let totalPassed = 0;
        let totalPercentage = 0;
        let duration = 0;

        for(let i = 0; i < testGroups.length; i++)
        {
            const testGroup = testGroups[i];
            const results = testGroup.collectTestResults();
            
            totalTests += results.totalTests;
            totalPassed += results.totalPassed;
            duration += results.duration;
        }
        totalPercentage = (totalTests == 0) ? 0 : (totalPassed/totalTests) * 100;
        
        const results: GroupTestResults = {
            totalTests,
            totalPassed,
            totalPercentage,
            duration,
        }

        return results;
    }

    //#region API

    async runAllTests()
    {
        const testGroups = this.findElements<CodeTestsElement>('code-tests');
        const inOrder = this.getAttribute('ordered') != 'false';

        this.setStateProperties({ isRunning: true });

        if(inOrder == true)
        {
            for(let i = 0; i < testGroups.length; i++)
            {
                if(this.state.isCanceled == true) { continue; }
                const testGroup = testGroups[i];
                const enabled = testGroup.findElement<HTMLInputElement>('#enabled').checked;
                if(enabled == false) { continue; }
                await testGroups[i].runTests();
            }
        }
        else
        {
            const promises = []
            for(let i = 0; i < testGroups.length; i++)
            {
                const testGroup = testGroups[i];
                const enabled = testGroup.findElement<HTMLInputElement>('#enabled').checked;
                if(enabled == false) { continue; }
                promises.push(testGroups[i].runTests());
            }
            await Promise.allSettled(promises);
        }
        this.setStateProperties({ isRunning: false });
    }
    
    getResultCategory()
    {
        const testCategory = this.findElements<CodeTestsElement>('code-tests').reduce((result, item, _index) => {
            const category = item.getResultCategory();
            if(result == 'fail' || category == 'fail') { return 'fail'; }
            if((result == 'success' || result == '') && category == 'success') { return 'success'; }
            if(category == 'none') { return 'none'; }
            return 'none';
        }, '');
        return testCategory;
    }
    async reset()
    {
        const testGroups = this.findElements<CodeTestsElement>('code-tests');
        for(let i = 0; i < testGroups.length; i++)
        {
            const testGroup = testGroups[i];
            testGroup.reset();
        }

        this.setStateProperties({
            isCanceled: false,
            isRunning: false,
        });
    }

    cancel()
    {
        const testGroups = this.findElements<CodeTestsElement>('code-tests');
        for(let i = 0; i < testGroups.length; i++)
        {
            const testGroup = testGroups[i];
            testGroup.cancel();
        }
        this.classList.add('canceled');
        this.part.add('canceled');
        this.setStateProperties({ isCanceled: true, isRunning: false });
    }
    
    getPromptParent()
    {
        return this.findElement('#analyst-queue-items');
    }
    toggleAnalystQueueOpen(open?: boolean)
    {
        open = open ?? true;
        this.findElement<HTMLDetailsElement>('#analyst-queue').open = open;
    }
    //#endregion
    
    //#region Handlers
    #codeTestsElements: Map<CodeTestsElement, { isLoaded: boolean, enabled: boolean }> = new Map();;
    #boundInitHandler: (event: Event) => void= this.#codeTests_onInit.bind(this);
    async #codeTests_onInit(event: Event)
    {
        event.preventDefault();  
        const customEvent = event as CustomEvent;
        const element = customEvent.detail.target as CodeTestsElement;
        let elementState = this.#codeTestsElements.get(element);
        
        if(elementState == null)
        {
            elementState = { isLoaded: false, enabled: element.findElement<HTMLInputElement>('#enabled').checked };
            this.#codeTestsElements.set(element, elementState);
        } 
        else if(elementState.isLoaded == false)
        {
            await element.reloadTests();
            element.toggleAttribute('optional', true);
            elementState.isLoaded = true;
            this.#codeTestsElements.set(element, elementState);
        }
    }
    #boundSlotChangeHandler: (event: Event) => void= this.#onSlotChange.bind(this);
    #onSlotChange(_event: Event)
    {
        const subjectSlot = this.findElement<HTMLSlotElement>('#subject-slot');
        const children = subjectSlot.assignedElements();
        const testGroups = children.filter(item => item instanceof CodeTestsElement);
        this.findElement('#test-group-items').append(...testGroups);
    }
    #boundClickHandler: (event: Event) => void= this.#onClick.bind(this);
    async #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        const runAllButton = composedPath.find(item => item instanceof HTMLButtonElement && item.id == 'run-all') as HTMLButtonElement;
        if(runAllButton != null)
        { 
            if(this.classList.contains('running'))
            {
                this.cancel();
            }
            else if(this.classList.contains('fail') || this.classList.contains('success'))
            {
                this.reset();
            }
            else
            {
                this.runAllTests();
            }
            return;
        }
    }
    #boundEnabledHandler: (event: Event) => void= this.#codeTests_onEnabled.bind(this);
    #codeTests_onEnabled(event: Event)
    {  
        const customEvent = event as CustomEvent;
        const element = customEvent.detail.target as CodeTestsElement;
        let elementState = this.#codeTestsElements.get(element);
        if(elementState == null) { throw new Error("Cannot update element enabled state: Element state not found."); }
    }
    #boundAfterTestHander: (event: Event) => void= this.#codeTests_afterTest.bind(this);
    #codeTests_afterTest(_event: Event)
    {
        this.#renderGroupResults();
    }
    #boundPromptInjectHander: (event: Event) => void= this.#codeTests_onPromptInject.bind(this);
    #codeTests_onPromptInject(event: Event)
    {
        const customEvent = event as CustomEvent;
        const promptElement = customEvent.detail.promptElement;
        const codeTestElement = customEvent.detail.codeTestElement as CodeTestElement;

        const template = this.findElement<HTMLTemplateElement>('#prompt-template');
        const infoElement = createElementFromTemplate(template);

        const testLinkElement = infoElement.querySelector<HTMLElement>('.test-link')!;
        testLinkElement.addEventListener('click', () =>
        {
            let target: HTMLElement|null = codeTestElement.closest('details');
            while(target != null)
            {
                target.toggleAttribute('open', true);
                target = target.parentElement?.closest('details') ?? null;
            }
            codeTestElement.part.add('highlight');
            codeTestElement.scrollIntoView()
            setTimeout(() => { codeTestElement.part.remove('highlight'); }, 3000);
        });

        testLinkElement.dataset.testId = codeTestElement.state.testId;
        testLinkElement.textContent = codeTestElement.state.description ?? '[ unknown parent ]';

        promptElement.prepend(infoElement);
    }
    //#endregion Handlers
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TestRunnerElement);
}

export * from '@magnit-ce/code-tests';