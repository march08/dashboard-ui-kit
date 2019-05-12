declare module 'react-element-to-jsx-string' {
  export type ReactElementToJSXStringOptions = {
    displayName?: (v: any) => string,
    showDefaultProps?: boolean
  }

  export function reactElementToJSXString(node: React.ReactNode, options?: ReactElementToJSXStringOptions): string
  export default ReactElementToJSXString
}