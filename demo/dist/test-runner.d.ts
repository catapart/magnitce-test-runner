import { CodeTestsElement } from '@magnit-ce/code-tests';
export * from '@magnit-ce/code-tests';

type TestRunnerProperties = {};
declare class TestRunnerElement extends HTMLElement {
    #private;
    findElement<T extends HTMLElement = HTMLElement>(id: string): T;
    constructor();
    updateTests(testGroups: CodeTestsElement[]): void;
    runAllTests(): Promise<void>;
}

export { TestRunnerElement, type TestRunnerProperties };
