// styles
import style from './test-group.css?raw';
// html
import html from './test-group.html?raw';
// icons
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from 'ce-part-utils';
import { CodeTestEventType, CodeTestsElement } from '@magnit-ce/code-tests';

export type TestGroupProperties =
{
}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
`;

const COMPONENT_TAG_NAME = 'test-group';
export class TestGroupElement extends HTMLElement
{
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    get enabled() { return this.findElement<HTMLInputElement>('enable-value')?.checked; }

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    }

    connectedCallback()
    {
        this.findElement<HTMLDetailsElement>('details').open = true;
        const groupsSlot = this.findElement<HTMLSlotElement>('groups-slot');
        groupsSlot.addEventListener('slotchange', () =>
        {
            const children = groupsSlot.assignedElements();
            const testGroup = children.find(item => item.tagName == 'CODE-TESTS') as CodeTestsElement;
            if(testGroup != null)
            {
                const header = testGroup.shadowRoot!.querySelector('#header') as HTMLElement|null;
                header?.style.setProperty('display', 'none');

                const title = (testGroup.querySelector('[slot="title"]') ?? header?.querySelector('#title-text'))?.textContent;
                if(title != null)
                {
                    this.findElement('group-title').textContent = title;
                }
                const runButton = header?.querySelector('button.run') as HTMLButtonElement|null;
                if(runButton != null)
                {
                    this.findElement('summary').append(runButton);
                }

                testGroup.loadTests();
                // console.log(testGroup);
            }
        });

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);

        this.addEventListener(CodeTestEventType.BeforeAll, () =>
        {
            this.classList.remove('success', 'fail');
            this.part.remove('success', 'fail');

            this.classList.add('running');
            this.part.add('running');
        });
        this.addEventListener(CodeTestEventType.AfterAll, () =>
        {
            this.classList.remove('running');
            this.part.remove('running');

            const children = groupsSlot.assignedElements();
            const testGroup = children.find(item => item.tagName == 'CODE-TESTS');
            if(testGroup != null && testGroup.hasAttribute('success') == true)
            {
                this.classList.add('success');
                this.part.add('success');
            }
            else
            {
                this.classList.add('fail');
                this.part.add('fail');
            }

            const playButtonLabel = this.findElement("play-button-label");
            if (playButtonLabel != null)
            {
                playButtonLabel.textContent = "Run Tests";
            }
        });
    }

    runTests()
    {
        if(this.classList.contains('running'))
        {
            if(this.classList.contains('canceled')) { return; }
            this.querySelector<CodeTestsElement>('code-tests')?.cancel();
            return;
        }

        const playButtonLabel = this.findElement("play-button-label");
        if (playButtonLabel != null)
        {
            playButtonLabel.textContent = "Cancel";
        }
        return this.querySelector<CodeTestsElement>('code-tests')?.runTests();
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TestGroupElement);
}