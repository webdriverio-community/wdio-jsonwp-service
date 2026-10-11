WDIO JSONWP Service [![CI](https://github.com/webdriverio-community/wdio-jsonwp-service/actions/workflows/ci.yml/badge.svg)](https://github.com/webdriverio-community/wdio-jsonwp-service/actions/workflows/ci.yml) [![Audit](https://github.com/webdriverio-community/wdio-jsonwp-service/actions/workflows/audit.yml/badge.svg)](https://github.com/webdriverio-community/wdio-jsonwp-service/actions/workflows/audit.yml)
==========

> [!WARNING]
> **This service is in maintenance mode. It does not support WebdriverIO v10.**
>
> It gets only critical fixes for WebdriverIO v9, and no new features. When WebdriverIO v9 reaches its end of life,
> this service is no longer maintained.
>
> WebdriverIO v10 accepts only W3C WebDriver sessions. Servers that still use the JSON Wire Protocol (Selenium 3,
> PhantomJS, EdgeHTML with `--jwp`, WinAppDriver connected to directly) cannot start a session, and this service
> cannot change that. See the [v10 migration guide](https://github.com/webdriverio/webdriverio/blob/main/website/docs/v10Migration.md#webdriver-protocol).
>
> - If you must test on such a server, stay on WebdriverIO v9 with this service.
> - Otherwise, move to a W3C server and use the W3C commands (for example, [`performActions`](https://webdriver.io/docs/api/webdriver#performactions) instead of `buttonUp`).

This service installs all legacy [JSON Wire Protocol](https://www.selenium.dev/documentation/legacy/json_wire_protocol/) to your browser instance in cases you still need to run tests on environments that don't support WebDriver.

## Installing

You can install this package via:

```sh
npm install @wdio/jsonwp-service
```

## Configuration

In your `wdio.conf.ts` or `wdio.conf.js` add this service to the list of services:

```ts
// wdio.conf.ts
export const config: WebdriverIO.Config = {
  // ...
  services: ['jsonwp']
  // ...
}
```

## Usage

Once set up as described, you have access to all JSON Wire Protocol commands, e.g.:

```ts
import { browser } from '@wdio/globals'

describe('my test suite', () => {
  it('can call JSONWP commands', async () => {
    // call JSONWP command
    await browser.buttonUp()
  })
})
```

### Standalone

If you are using WebdriverIO as a standalone package you can use this service by integrating this service as following:

```ts
import { remote } from 'webdriverio'
import JSONWPService from '@wdio/jsonwp-service'

const browser = await remote({ ... })

const jsonwp = new JSONWPService()
jsonwp.before(undefined, undefined, browser)

// call JSONWP command
await browser.buttonUp()
```

---

For more information on WebdriverIO see the [homepage](https://webdriver.io).
