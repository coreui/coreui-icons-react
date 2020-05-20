import React from 'react'

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

export declare const CIconRaw: (props: CIconRaw) => React.SFC<CIconRaw>;
export declare const CIcon: (props: CIcon) => React.SFC<CIcon>;
