import type { StatusReturn, SessionReturn, ProtocolCommandResponse, DeleteSessionOpts, RectReturn, ElementReference, Cookie } from '@wdio/protocols'
export default interface JsonwpCommands {
    /**
     * Jsonwp Protocol Command
     *
     * Query the server's current status. The server should respond with a general "HTTP 200 OK" response if it is alive and accepting commands. The response body should be a JSON object describing the state of the server. All server implementations should return two basic objects describing the server's current platform and when the server was built. All fields are optional; if omitted, the client should assume the value is unknown. Furthermore, server implementations may include additional fields not listed here.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#status
     */
    status(): Promise<StatusReturn>;
    /**
     * Jsonwp Protocol Command
     *
     * Create a new session. The server should attempt to create a session that most closely matches the desired and required capabilities. Required capabilities have higher priority than desired capabilities and must be set for the session to be created.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#session-1
     */
    newSession(desiredCapabilities: object, requiredCapabilities: object): Promise<SessionReturn>;
    /**
     * Jsonwp Protocol Command
     *
     * Returns a list of the currently active sessions. Each session will be returned as a list of JSON objects containing `id` and `capabilities`.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessions
     */
    getSessions(): Promise<object[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Retrieve the capabilities of the specified session.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionid
     */
    getSession(): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Delete the session.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionid
     */
    deleteSession(deleteSessionOpts?: DeleteSessionOpts): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeouts
     */
    setTimeouts(type: string, ms: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Set the amount of time, in milliseconds, that asynchronous scripts executed by `/session/:sessionId/execute_async` are permitted to run before they are aborted and a `Timeout` error is returned to the client.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsasync_script
     */
    setAsyncTimeout(ms: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Set the amount of time the driver should wait when searching for elements. When searching for a single element, the driver should poll the page until an element is found or the timeout expires, whichever occurs first. When searching for multiple elements, the driver should poll the page until at least one element is found or the timeout expires, at which point it should return an empty list. If this command is never sent, the driver should default to an implicit wait of 0ms.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsimplicit_wait
     */
    setImplicitTimeout(ms: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Retrieve the URL of the current page.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidurl
     */
    getUrl(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Navigate to a new URL.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidurl
     */
    navigateTo(url: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Navigate backwards in the browser history, if possible.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidback
     */
    back(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Navigate forwards in the browser history, if possible.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidforward
     */
    forward(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Refresh the current page.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidrefresh
     */
    refresh(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the current page title.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtitle
     */
    getTitle(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Retrieve the current window handle.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow_handle
     */
    getWindowHandle(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Retrieve the list of all window handles available to the session.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow_handles
     */
    getWindowHandles(): Promise<string[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Close the current window.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidwindow
     */
    closeWindow(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its `name` attribute.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidwindow
     */
    switchToWindow(name: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Change focus to another frame on the page. If the frame `id` is `null`, the server should switch to the page's default content.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframe
     */
    switchToFrame(id: (string | number | object | null)): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframeparent
     */
    switchToParentFrame(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the position of the current focussed window.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidwindowwindowhandleposition
     */
    getWindowPosition(): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Change the position of the current focussed window.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidwindowwindowhandleposition
     */
    setWindowPosition(x: number, y: number): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the size of the current focused window.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidwindowwindowhandlesize
     */
    _getWindowSize(): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Change the size of the current focused window.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidwindowwindowhandlesize
     */
    _setWindowSize(width: number, height: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Maximize the current focused window if not already maximized.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandlemaximize
     */
    maximizeWindow(): Promise<RectReturn>;
    /**
     * Jsonwp Protocol Command
     *
     * Search for an element on the page, starting from the document root. The located element will be returned as a WebElement JSON object. The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelement
     */
    findElement(using: string, value: string): Promise<ElementReference>;
    /**
     * Jsonwp Protocol Command
     *
     * Search for multiple elements on the page, starting from the document root. The located elements will be returned as a WebElement JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in the order located in the DOM.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelements
     */
    findElements(using: string, value: string): Promise<ElementReference[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Search for an element on the page, starting from the identified element. The located element will be returned as a WebElement JSON object. The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelement
     */
    findElementFromElement(elementId: string, using: string, value: string): Promise<ElementReference>;
    /**
     * Jsonwp Protocol Command
     *
     * Search for multiple elements on the page, starting from the identified element. The located elements will be returned as a WebElement JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in the order located in the DOM.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelements
     */
    findElementsFromElement(elementId: string, using: string, value: string): Promise<ElementReference[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the element on the page that currently has focus. The element will be returned as a WebElement JSON object.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementactive
     */
    getActiveElement(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Determine if an `OPTION` element, or an `INPUT` element of type `checkbox` or `radiobutton` is currently selected.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidselected
     */
    isElementSelected(elementId: string): Promise<boolean>;
    /**
     * Jsonwp Protocol Command
     *
     * Determine if an element is currently displayed.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementiddisplayed
     */
    isElementDisplayed(elementId: string): Promise<boolean>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the value of an element's attribute.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidattributename
     */
    getElementAttribute(elementId: string, name: string): Promise<string | null>;
    /**
     * Jsonwp Protocol Command
     *
     * Query the value of an element's computed CSS property. The CSS property to query should be specified using the CSS property name, __not__ the JavaScript property name (e.g. `background-color` instead of `backgroundColor`).
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidcsspropertyname
     */
    getElementCSSValue(elementId: string, propertyName: string): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Returns the visible text for the element.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidtext
     */
    getElementText(elementId: string): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Query for an element's tag name.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidname
     */
    getElementTagName(elementId: string): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Determine an element's location on the page. The point `(0, 0)` refers to the upper-left corner of the page. The element's coordinates are returned as a JSON object with `x` and `y` properties.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation
     */
    getElementLocation(elementId: string): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Determine an element's location on the screen once it has been scrolled into view.<br /><br />__Note:__ This is considered an internal command and should only be used to determine an element's location for correctly generating native events.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation_in_view
     */
    getElementLocationInView(elementId: string): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Determine an element's size in pixels. The size will be returned as a JSON object with `width` and `height` properties.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsize
     */
    getElementSize(elementId: string): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Determine if an element is currently enabled.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidenabled
     */
    isElementEnabled(elementId: string): Promise<boolean>;
    /**
     * Jsonwp Protocol Command
     *
     * Click any mouse button (at the coordinates set by the last moveto command). Note that calling this command after calling buttondown and before calling button up (or any out-of-order interactions sequence) will yield undefined behaviour).
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclick
     */
    elementClick(elementId: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Compare elements with each other.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidequalsother
     */
    elementEquals(elementId: string, otherElementId: string): Promise<boolean>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsubmit
     */
    elementSubmit(elementId: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclear
     */
    elementClear(elementId: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidvalue
     */
    elementSendKeys(elementId: string, value: string[]): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidkeys
     */
    sendKeys(value: string[]): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsource
     */
    getPageSource(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidexecute
     */
    executeScript(script: string, args?: (string | object | number | boolean | undefined)[]): Promise<unknown>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidexecute_async
     */
    executeAsyncScript(script: string, args: (string | object | number | boolean | undefined)[]): Promise<unknown>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidcookie
     */
    getAllCookies(): Promise<Cookie[]>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidcookie
     */
    addCookie(cookie: object): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidcookie
     */
    deleteAllCookies(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidcookiename
     */
    deleteCookie(name: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddismiss_alert
     */
    dismissAlert(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidaccept_alert
     */
    acceptAlert(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidalert_text
     */
    getAlertText(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://w3c.github.io/webdriver/webdriver-spec.html#dfn-send-alert-text
     */
    sendAlertText(text: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidscreenshot
     */
    takeScreenshot(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeavailable_engines
     */
    getAvailableEngines(): Promise<string[]>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactive_engine
     */
    getActiveEngine(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivated
     */
    isIMEActivated(): Promise<boolean>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimedeactivate
     */
    deactivateIME(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivate
     */
    activateIME(engine: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidorientation
     */
    getOrientation(): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidorientation
     */
    setOrientation(orientation: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidmoveto
     */
    moveToElement(element?: (string | null), xoffset?: number, yoffset?: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Click and hold the left mouse button (at the coordinates set by the last moveto command). Note that the next mouse-related command that should follow is buttonup . Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttondown
     */
    buttonDown(button?: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Releases the mouse button previously held (where the mouse is currently at). Must be called once for every buttondown command issued. See the note in click and buttondown about implications of out-of-order commands.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttonup
     */
    buttonUp(button?: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Clicks at the current mouse coordinates (set by moveto).
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidclick
     */
    positionClick(button?: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Double-clicks at the current mouse coordinates (set by moveto).
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddoubleclick
     */
    positionDoubleClick(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Single tap on the touch enabled device.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchclick
     */
    touchClick(element: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Finger move on the screen.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchscroll
     */
    touchScroll(xoffset: number, yoffset: number, element?: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Double tap on the touch screen using finger motion events.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchdoubleclick
     */
    touchDoubleClick(element: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Flick on the touch screen using finger motion events. This flickcommand starts at a particulat screen location.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchflick
     */
    touchFlick(xoffset?: number, yoffset?: number, element?: string, speed?: number, xspeed?: number, yspeed?: number): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the current geo location.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocation
     */
    getGeoLocation(): Promise<ProtocolCommandResponse>;
    /**
     * Jsonwp Protocol Command
     *
     * Set the current geo location.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidlocation
     */
    setGeoLocation(location: object): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get all keys of the storage.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocal_storage
     */
    getLocalStorage(): Promise<string[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Set the storage item for the given key.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidlocal_storage
     */
    setLocalStorage(key: string, value: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Clear the storage.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocal_storage
     */
    clearLocalStorage(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the storage item for the given key.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidlocal_storagekeykey
     */
    getLocalStorageItem(key: string): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * No description available, please see reference link.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidlocal_storagekeykey
     */
    deleteLocalStorageItem(key: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the number of items in the storage.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storagesize
     */
    getLocalStorageSize(): Promise<number>;
    /**
     * Jsonwp Protocol Command
     *
     * Get all keys of the storage.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidsession_storage
     */
    getSessionStorage(): Promise<string[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Set the storage item for the given key.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidsession_storage
     */
    setSessionStorage(key: string, value: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Clear the storage.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidsession_storage
     */
    clearSessionStorage(): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the storage item for the given key.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#get-sessionsessionidsession_storagekeykey
     */
    getSessionStorageItem(key: string): Promise<string>;
    /**
     * Jsonwp Protocol Command
     *
     * Remove the storage item for the given key.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#delete-sessionsessionidsession_storagekeykey
     */
    deleteSessionStorageItem(key: string): Promise<void>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the number of items in the storage.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storagesize
     */
    getSessionStorageSize(): Promise<number>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the log for a given log type. Log buffer is reset after each request.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlog
     */
    getLogs(type: string): Promise<object[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Get available log types.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlogtypes
     */
    getLogTypes(): Promise<string[]>;
    /**
     * Jsonwp Protocol Command
     *
     * Get the status of the html5 application cache.
     * @ref https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidapplication_cachestatus
     */
    getApplicationCacheStatus(): Promise<number>;
}
