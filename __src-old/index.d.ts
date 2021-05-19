import { HTMLProps } from 'react'
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface CIcon extends Omit<HTMLProps<any>, 'content' | 'size'> {
  className?: string
  name?: string
  content?: string | Array<string>
  size?: string
  customClasses?: string | Array<any> | object
  src?: string
  title?: string
  use?: string
}

declare const CIcon: (props: CIcon) => any

export { CIcon }
export default CIcon