// styles
import style from './test-runner.css?raw';
// html
import html from './test-runner.html?raw';
// icons
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from 'ce-part-utils';
import { CodeTestsElement } from '@magnit-ce/code-tests';
import { TestGroupElement } from './test-group/test-group';

import './test-group/test-group';

export type TestRunnerProperties =
{
}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
`;

const COMPONENT_TAG_NAME = 'test-runner';
export class TestRunnerElement extends HTMLElement
{
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#addHandlers();

        const groupsSlot = this.findElement<HTMLSlotElement>('groups-slot');
        groupsSlot.addEventListener('slotchange', () =>
        {
            const children = groupsSlot.assignedElements();
            if (children.length == 0)
            {
                this.classList.add("empty");
                this.part.add("empty");
            }
            else
            {
                this.classList.remove("empty");
                this.part.remove("empty");
            }

            const subject = this.findElement('subject');

            const testGroups: CodeTestsElement[] = [];
            for(let i = 0; i < children.length; i++)
            {
                const child = children[i];
                console.log(child);
                if(child instanceof CodeTestsElement)
                {
                    testGroups.push(child);
                }
                else
                {
                    subject.append(child);
                }
            }
            this.updateTests(testGroups);
        });

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }

    //#region API

    updateTests(testGroups: CodeTestsElement[])
    {
        const groupElements: TestGroupElement[] = [];
        for(let i = 0; i < testGroups.length; i++)
        {
            const groupTests = testGroups[i];
            const group = this.#createTestGroup(groupTests);
            groupElements.push(group);

            // testGroups[i].remove();
        }

        this.findElement('test-group-items').append(...groupElements);
    }
    async runAllTests()
    {
        const groups = this.shadowRoot!.querySelectorAll<TestGroupElement>('test-group');
        for(let i = 0; i < groups.length; i++)
        {
            const group = groups[i];
            if(group.enabled == false) { continue; }

            await group.runTests();
        }
    }
    //#endregion
    
    //#region Handlers
    async #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        const runAllButton = composedPath.find(item => item instanceof HTMLButtonElement && item.id == 'run-all') as HTMLButtonElement;
        if(runAllButton != null)
        { 
            this.runAllTests();
        }

        const runButton = composedPath.find(item => item instanceof HTMLButtonElement && item.classList.contains('run') && item.hasAttribute('data-all')) as HTMLButtonElement;
        if(runButton != null)
        {
            //@ts-expect-error ts thinks the custom element root does not have a host property
            const group = runButton.getRootNode().host;
            if(group != null && group instanceof TestGroupElement)
            {
                group.runTests();
            }
            // this.runTests();
        }
    }
    //#endregion Handlers

    //#region Management
    #createTestGroup(codeTests: CodeTestsElement)
    {
        const element = document.createElement('test-group') as TestGroupElement;
        element.append(codeTests);

        // element.tabIndex = 0;
        // element.setAttribute('part', 'group');
        // element.classList.add('group');

        return element;
    }
    #addHandlers()
    {
        this.addEventListener('click', this.#onClick);
    }
    //#endregion
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TestRunnerElement);
}

export * from '@magnit-ce/code-tests';