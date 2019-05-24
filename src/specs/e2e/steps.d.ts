
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare class FeatureConfig {
  retry(times:number): FeatureConfig
  timeout(seconds:number): FeatureConfig
  config(config:object): FeatureConfig
  config(helperName:string, config:object): FeatureConfig
}

declare class ScenarioConfig {
  throws(err:any) : ScenarioConfig;
  fails() : ScenarioConfig;
  retry(times:number): ScenarioConfig
  timeout(timeout:number): ScenarioConfig
  inject(inject:object): ScenarioConfig
  config(config:object): ScenarioConfig
  config(helperName:string, config:object): ScenarioConfig
}

interface ILocator {
  id?: string;
  xpath?: string;
  css?: string;
  name?: string;
  frame?: string;
  android?: string;
  ios?: string;
}

type LocatorOrString = string | ILocator | Locator;

declare class Helper {
  /** Abstract method to provide required config options */
  static _config(): any;
  /** Abstract method to validate config */
  _validateConfig<T>(config: T): T;
  /** Sets config for current test */
  _setConfig(opts: any): void;
  /** Hook executed before all tests */
  _init(): void
  /** Hook executed before each test. */
  _before(): void
  /** Hook executed after each test */
  _after(): void
  /**
   * Hook provides a test details
   * Executed in the very beginning of a test
   */
  _test(test: () => void): void
  /** Hook executed after each passed test */
  _passed(test: () => void): void
  /** Hook executed after each failed test */
  _failed(test: () => void): void
  /** Hook executed before each step */
  _beforeStep(step: () => void): void
  /** Hook executed after each step */
  _afterStep(step: () => void): void
  /** Hook executed before each suite */
  _beforeSuite(suite: () => void): void
  /** Hook executed after each suite */
  _afterSuite(suite: () => void): void
  /** Hook executed after all tests are executed */
  _finishTest(suite: () => void): void
  /**Access another configured helper: this.helpers['AnotherHelper'] */
  readonly helpers: any
  /** Print debug message to console (outputs only in debug mode) */
  debug(msg: string): void

  debugSection(section: string, msg: string): void
}

declare class Locator {
  constructor(locator: LocatorOrString, defaultType?: string);

  or(locator: LocatorOrString): Locator;
  find(locator: LocatorOrString): Locator;
  withChild(locator: LocatorOrString): Locator;
  withDescendant(locator: LocatorOrString): Locator;
  at(position: number): Locator;
  first(): Locator;
  last(): Locator;
  inside(locator: LocatorOrString): Locator;
  before(locator: LocatorOrString): Locator;
  after(locator: LocatorOrString): Locator;
  withText(text: string): Locator;
  withAttr(attrs: object): Locator;
  as(output: string): Locator;
}


declare function actor(customSteps?: {
  [action: string]: (this: CodeceptJS.I, ...args: any[]) => void
}): CodeceptJS.I;
declare function actor(customSteps?: {}): CodeceptJS.I;
declare function Feature(title: string, opts?: {}): FeatureConfig;
declare const Scenario: {
  (title: string, callback: ICodeceptCallback): ScenarioConfig;
  (title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
}
declare function xScenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
declare function xScenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
declare function Data(data: any): any;
declare function xData(data: any): any;
declare function Before(callback: ICodeceptCallback): void;
declare function BeforeSuite(callback: ICodeceptCallback): void;
declare function After(callback: ICodeceptCallback): void;
declare function AfterSuite(callback: ICodeceptCallback): void;

declare function locate(selector: LocatorOrString): Locator;
declare function within(selector: LocatorOrString, callback: Function): Promise<any>;
declare function session(selector: string, callback: Function): Promise<any>;
declare function session(selector: string, config: any, callback: Function): Promise<any>;
declare function pause(): void;

declare const codeceptjs: any;

declare namespace CodeceptJS {
  export interface I {
    defineTimeout(timeouts: string) : void,
    amOnPage(url: string) : void,
    click(locator: LocatorOrString, context?: LocatorOrString) : void,
    doubleClick(locator: LocatorOrString, context?: LocatorOrString) : void,
    rightClick(locator: LocatorOrString, context: LocatorOrString) : void,
    fillField(field: LocatorOrString, value: string) : void,
    appendField(field: LocatorOrString, value: string) : void,
    clearField(field: LocatorOrString) : void,
    selectOption(select: LocatorOrString, option: string) : void,
    attachFile(locator: LocatorOrString, pathToFile: string) : void,
    checkOption(field: LocatorOrString, context?: LocatorOrString) : void,
    uncheckOption(field: LocatorOrString, context?: LocatorOrString) : void,
    grabTextFrom(locator: LocatorOrString) : Promise<string>,
    grabHTMLFrom(locator: LocatorOrString) : Promise<string>,
    grabValueFrom(locator: LocatorOrString) : Promise<string>,
    grabCssPropertyFrom(locator: LocatorOrString, cssProperty: string) : Promise<string>,
    grabAttributeFrom(locator: LocatorOrString, attr: string) : Promise<string>,
    seeInTitle(text: string) : void,
    seeTitleEquals(text: string) : void,
    dontSeeInTitle(text: string) : void,
    grabTitle() : Promise<string>,
    see(text: string, context?: LocatorOrString) : void,
    seeTextEquals(text: string, context?: LocatorOrString) : void,
    dontSee(text: string, context?: LocatorOrString) : void,
    seeInField(field: LocatorOrString, value: string) : void,
    dontSeeInField(field: LocatorOrString, value: string) : void,
    seeCheckboxIsChecked(field: LocatorOrString) : void,
    dontSeeCheckboxIsChecked(field: LocatorOrString) : void,
    seeElement(locator: LocatorOrString) : void,
    dontSeeElement(locator: LocatorOrString) : void,
    seeElementInDOM(locator: LocatorOrString) : void,
    dontSeeElementInDOM(locator: LocatorOrString) : void,
    seeInSource(text: string) : void,
    grabSource() : Promise<string>,
    grabBrowserLogs() : Promise<string>,
    grabCurrentUrl() : Promise<string>,
    dontSeeInSource(text: string) : void,
    seeNumberOfElements(locator: LocatorOrString, num: number) : void,
    seeNumberOfVisibleElements(locator: LocatorOrString, num: number) : void,
    seeCssPropertiesOnElements(locator: LocatorOrString, cssProperties: string) : void,
    seeAttributesOnElements(locator: LocatorOrString, attributes: string) : void,
    grabNumberOfVisibleElements(locator: LocatorOrString) : Promise<string>,
    seeInCurrentUrl(url: string) : void,
    dontSeeInCurrentUrl(url: string) : void,
    seeCurrentUrlEquals(url: string) : void,
    dontSeeCurrentUrlEquals(url: string) : void,
    executeScript(fn: Function) : void,
    executeAsyncScript(fn: Function) : void,
    scrollTo(locator: LocatorOrString, offsetX?: number, offsetY?: number) : void,
    moveCursorTo(locator: LocatorOrString, offsetX?: number, offsetY?: number) : void,
    saveScreenshot(fileName: string, fullPage?: string) : void,
    setCookie(cookie: string) : void,
    clearCookie(cookie: string) : void,
    seeCookie(name: string) : void,
    dontSeeCookie(name: string) : void,
    grabCookie(name: string) : Promise<string>,
    acceptPopup() : void,
    cancelPopup() : void,
    seeInPopup(text: string) : void,
    grabPopupText() : Promise<string>,
    pressKey(key: string) : void,
    resizeWindow(width: number, height: number) : void,
    dragAndDrop(srcElement: string, destElement: string) : void,
    dragSlider(locator: LocatorOrString, offsetX?: number) : void,
    closeOtherTabs() : void,
    wait(sec: number) : void,
    waitForEnabled(locator: LocatorOrString, sec?: number) : void,
    waitForElement(locator: LocatorOrString, sec?: number) : void,
    waitUntilExists(locator: LocatorOrString, sec?: number) : void,
    waitInUrl(urlPart: string, sec?: number) : void,
    waitUrlEquals(urlPart: string, sec?: number) : void,
    waitForText(text: string, sec?: number, context?: LocatorOrString) : void,
    waitForValue(field: LocatorOrString, value: string, sec?: number) : void,
    waitForVisible(locator: LocatorOrString, sec?: number) : void,
    waitNumberOfVisibleElements(locator: LocatorOrString, num: number, sec?: number) : void,
    waitForInvisible(locator: LocatorOrString, sec?: number) : void,
    waitToHide(locator: LocatorOrString, sec?: number) : void,
    waitForStalenessOf(locator: LocatorOrString, sec?: number) : void,
    waitForDetached(locator: LocatorOrString, sec?: number) : void,
    waitForFunction(fn: Function, argsOrSec?: string, sec?: number) : void,
    waitUntil(fn: Function, sec?: number, timeoutMsg?: string, interval?: string) : void,
    switchTo(locator: LocatorOrString) : void,
    switchToNextTab(num?: number, sec?: number) : void,
    switchToPreviousTab(num?: number, sec?: number) : void,
    closeCurrentTab() : void,
    openNewTab() : void,
    grabNumberOfOpenTabs() : Promise<string>,
    refreshPage() : void,
    scrollPageToTop() : void,
    scrollPageToBottom() : void,
    grabPageScrollPosition() : Promise<string>,
    runOnIOS(caps: string, fn: Function) : void,
    runOnAndroid(caps: string, fn: Function) : void,
    runInWeb(fn: Function) : void,
    debug(msg: string) : void,
    debugSection(section: string, msg: string) : void,
    say: () => any; 
    retryStep(opts: string) : void,

  }

}

declare module "codeceptjs" {
    export = CodeceptJS;
}
