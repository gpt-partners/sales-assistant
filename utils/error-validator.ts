export class ErrorValidator {
  private state: any

  constructor(initialState: any) {
    this.state = initialState
  }

  setState(newState: any) {
    this.state = newState
  }

  hasErrors(propName: string): boolean {
    if (!this.state.errors?.length) return false
    return Boolean(this.state.errors.find((item: any) => item.path[0] === propName))
  }
}
