interface CIconRaw {
  className?: string
  name?: string
  content?: string | Array<string>
  size?: string
  customClasses?: string | Array<any> | object
  src?: string
  title?: string
  use?: string
}

interface CIcon extends CIconRaw {}

export declare const CIconRaw: (props: CIconRaw) => any;
export declare const CIcon: (props: CIcon) => any;
