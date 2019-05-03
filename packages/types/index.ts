export interface IOption {
  value: string | number
  label: string | React.ReactNode
}

export interface IOptions extends Array<IOption> {}