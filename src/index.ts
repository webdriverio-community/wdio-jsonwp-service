/// <reference types="webdriverio" />

import { command } from 'webdriver'
import type { Services } from '@wdio/types'

import protocol from './protocol.js'
import type Commands from './types.js'

export default class JSONWireProtocolService implements Services.ServiceInstance {
  before(_: never, __: never, browser: WebdriverIO.Browser) {
    for (const [endpoint, methods] of Object.entries(protocol)) {
      for (const [method, commandDetail] of Object.entries(methods)) {
        browser.addCommand(commandDetail.command, command(method, endpoint, commandDetail))
      }
    }
  }
}

declare global {
  namespace WebdriverIO {
      interface Browser extends Commands {}
  }
}
