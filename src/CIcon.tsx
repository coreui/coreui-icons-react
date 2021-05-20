import React, { DOMAttributes, FC, useState, useMemo } from 'react'
import classNames from 'classnames'
import './CIcon.css'

export interface CIconProps extends DOMAttributes<SVGSVGElement|HTMLImageElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Name of the icon placed in React object. [docs]
   */
  name?: string
  /**
   * Icon SVG content. [docs]
   */
  content?: string | Array<string>
  /**
   * Size of the icon. Available sizes: 'sm', 'lg', 'xl', '2xl'...'9xl', 'custom', 'custom-size'. [docs]
   */
  size?: 'custom'|'custom-size'|'sm'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'|'7xl'|'8xl'|'9xl'
  /**
   * Use for replacing default CIcon component classes. Prop is overriding the 'size' prop. [docs]
   */
  customClasses?: string | object | Array<string>
  /**
   * Link to the icon. If defined component will be rendered as 'img' tag. [docs]
   */
  src?: string
  /**
   * If defined component will be rendered using 'use' tag. [docs]
   */
  use?: string
  /**
   * Title tag content. [docs]
   */
  title?: string
  width?: string
  height?: string
}

let warned = {}
const colog = (msg: string, icon?: string) => {
  if (icon && !warned[icon] && process && process.env && process.env.NODE_ENV === 'development') {
    warned[icon] = true
    console.error(msg)
  }
}

const toCamelCase = (str: string) => {
  return str.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase()
  }).replace(/-/ig, '')
}

//component - CoreUI / CIcon
const CIcon: FC<CIconProps> = ({
  className,
  name,
  content,
  customClasses,
  size,
  src,
  title,
  use,
  ...rest
}) => {

  const [change, setChange] = useState(0)

  useMemo(() => setChange(change + 1), [name, JSON.stringify(content)])

  const iconName = useMemo(() => ( name && name.includes('-') ) ? toCamelCase(name) : name, [change])

  const titleCode = title ? `<title>${title}</title>` : ''

  const code = useMemo(() => {
    if (content) {
      return content
    } else if (name && React['icons']) {
      return React['icons'][iconName] ? React['icons'][iconName] :
        colog(`CIcon component: icon name '${iconName}' does not exist in React.icons object. ` +
              `To use icons by 'name' prop you need to make them available globally ` +
              `by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n`,
              iconName
            )
    }
  }, [change])

  const iconCode = useMemo(()=>{
    return Array.isArray(code) ? code[1] || code[0] : code
  }, [change])

  const scale = (()=>{
    return Array.isArray(code) && code.length > 1 ? code[0] : '64 64'
  })()

  const viewBox = (()=>{
    return rest['viewBox'] || `0 0 ${scale}`
  })()

  // render

  let classes

  if (customClasses) {
    classes = classNames(
      customClasses
    )
  }
  else
  {
    const computedSize = (()=>{
      const addCustom = !size && (rest['width'] || rest['height'])
      return size === 'custom' || addCustom ? 'custom-size' : size
    })()
    classes = classNames(
      'c-icon',
      computedSize && `c-icon-${computedSize}`,
      className
    )
  }
  //const classes =  customClasses || computedClasses

  // let restImg: HTMLAttributes<HTMLImageElement> = {}
  // if (src && !use) {
  //   restImg = rest as HTMLAttributes<HTMLImageElement>
  // }

  return (
    <React.Fragment>
      { !src && !use &&
        <svg
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className={classes}
          role="img"
          dangerouslySetInnerHTML={{__html: titleCode + iconCode}}
        />
      }
      { src && !use &&
        <img
          {...rest}
          className={className}
          src={src}
          role="img"
        />
      }
      { !src && use &&
        <svg
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          role="img"
        >
          <use href={use}></use>
        </svg>
      }
    </React.Fragment>
  )

}

export default CIcon

//

export const CIconWarn: FC<CIconProps> = (props) => {
  colog(
    '@coreui/icons-react: Please use default export since named exports are deprecated'
  )
  return <CIcon {...props}/>
}
