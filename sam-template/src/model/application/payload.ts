/* eslint-disable @typescript-eslint/no-explicit-any */
import { State } from "./state"

export class Auth {
  key: keyof State.Auth
  value?: any
  constructor(key: keyof State.Auth, value: any) {
    this.key = key
    this.value = value
  }
}

export class Global {
  key: keyof State.Global
  value?: any
  constructor(key: keyof State.Global, value: any) {
    this.key = key
    this.value = value
  }
}