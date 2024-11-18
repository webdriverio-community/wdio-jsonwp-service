import { describe, it, expect, afterAll } from 'vitest'
import { remote } from 'webdriverio'

import JSONWPService from '../src/index.js'

describe('JSON Wire Protocol Service', () => {
    let browser: WebdriverIO.Browser | undefined

    it('should add commands to the browser', async () => {
        const service = new JSONWPService()
        browser = await remote({
            logLevel: 'trace',
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['headless', 'disable-gpu']
                }
            }
        })
        expect(typeof browser.buttonUp).toBe('undefined')
        service.before(undefined as never, undefined as never, browser)
        expect(typeof browser.buttonUp).toBe('function')
    })

    afterAll(() => {
        return browser?.deleteSession()
    })
})
