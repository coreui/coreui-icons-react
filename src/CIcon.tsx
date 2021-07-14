import PropTypes from 'prop-types'
import React, { DOMAttributes, ImgHTMLAttributes, forwardRef, useState, useMemo } from 'react'
import classNames from 'classnames'
import './CIcon.css'

export interface CIconProps extends DOMAttributes<SVGSVGElement>, ImgHTMLAttributes<HTMLImageElement> {
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
   * Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'. [docs]
   */
  size?:
    | 'custom-size'
    | 'sm'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  /**
   * Use for replacing default CIcon component classes. Prop is overriding the 'size' prop. [docs]
   */
  customClassName?: string | object | Array<string>
  /**
   * If defined component will be rendered using 'use' tag. [docs]
   */
  use?: string
  /**
   * Title tag content. [docs]
   */
  title?: string
  // width?: string
  // height?: string
}

let warned = {}
const colog = (msg: string, icon?: string) => {
  if (icon && !warned[icon] && process && process.env && process.env.NODE_ENV === 'development') {
    warned[icon] = true
    console.error(msg)
  }
}

const toCamelCase = (str: string) => {
  return str
    .replace(/([-_][a-z0-9])/gi, ($1) => {
      return $1.toUpperCase()
    })
    .replace(/-/gi, '')
}

export const CIcon = forwardRef<SVGSVGElement, CIconProps>(
  ({ className, name, content, customClassName, size, title, use, ...rest }, ref) => {
    const [change, setChange] = useState(0)

    useMemo(() => setChange(change + 1), [name, JSON.stringify(content)])

    const iconName = useMemo(
      () => (name && name.includes('-') ? toCamelCase(name) : name),
      [change],
    )

    const titleCode = title ? `<title>${title}</title>` : ''

    const code = useMemo(() => {
      if (content) {
        return content
      } else if (name && React['icons']) {
        return React['icons'][iconName]
          ? React['icons'][iconName]
          : colog(
              `CIcon component: icon name '${iconName}' does not exist in React.icons object. ` +
                `To use icons by 'name' prop you need to make them available globally ` +
                `by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n`,
              iconName,
            )
      }
    }, [change])

    const iconCode = useMemo(() => {
      return Array.isArray(code) ? code[1] || code[0] : code
    }, [change])

    const scale = (() => {
      return Array.isArray(code) && code.length > 1 ? code[0] : '64 64'
    })()

    const viewBox = (() => {
      return rest['viewBox'] || `0 0 ${scale}`
    })()

    // render

    const _className = customClassName
      ? classNames(customClassName)
      : classNames(
          'icon',
          {
            [`icon-${size}`]: size,
            [`icon-custom-size`]: rest['height'] || rest['width']
          },
          className,
        )

    colog('@coreui/icons-react: Please use default export since named exports are deprecated')
    return use ? (
      <svg xmlns="http://www.w3.org/2000/svg" className={_className} role="img" {...rest} ref={ref}>
        <use href={use}></use>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className={_className}
        role="img"
        dangerouslySetInnerHTML={{ __html: titleCode + iconCode }}
        {...rest}
        ref={ref}
      />
    )
  },
)

CIcon.propTypes = {
  className: PropTypes.any,
  content: PropTypes.any,
  customClassName: PropTypes.any,
  name: PropTypes.string,
  size: PropTypes.oneOf([
    'custom-size',
    'sm',
    'lg',
    'xl',
    'xxl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ]),
  title: PropTypes.any,
  use: PropTypes.any,
}

CIcon.displayName = 'CIcon'
