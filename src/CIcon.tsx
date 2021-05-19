import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './CIcon.css'

let warned = {}
const colog = (msg, icon) => {
  if (!warned[icon] && process && process.env && process.env.NODE_ENV === 'development') {
    warned[icon] = true
    console.error(msg)
  }
}

const toCamelCase = (str) => {
  return str.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase()
  }).replace(/-/ig, '')
}

//component - CoreUI / CIcon
const CIcon = props => {

  const {
    className,
    name,
    content,
    customClasses,
    size,
    src,
    title,
    use,
    ...attributes
  } = props

  const [change, setChange] = useState(0)

  useMemo(() => setChange(change + 1), [name, JSON.stringify[content]])

  const iconName = useMemo(()=>{
    const iconNameIsKebabCase = name && name.includes('-')
    return iconNameIsKebabCase ? toCamelCase(name) : name
  }, [change])

  const titleCode = title ? `<title>${title}</title>` : ''

  const code = useMemo(() => {
    if (content) {
      return content
    } else if (name && React.icons) {
      return React.icons[iconName] ? React.icons[iconName] :
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
    return attributes.viewBox || `0 0 ${scale}`
  })()

  const computedSize = (()=>{
    const addCustom = !size && (attributes.width || attributes.height)
    return size === 'custom' || addCustom ? 'custom-size' : size
  })()

  //render
  const computedClasses = classNames(
    'c-icon',
    computedSize && `c-icon-${computedSize}`,
    className
  )

  const classes = customClasses || computedClasses

  return (
    <React.Fragment>
      { !src && !use &&
        <svg
          {...attributes}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className={classes}
          role="img"
          dangerouslySetInnerHTML={{__html: titleCode + iconCode}}
        />
      }
      { src && !use &&
        <img
          {...attributes}
          className={className}
          src={src}
          role="img"
        />
      }
      { !src && use &&
        <svg
          {...attributes}
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

CIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf([
    'custom', 'custom-size', 'sm', 'lg', 'xl',
    '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'
  ]),
  customClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  src: PropTypes.string,
  title: PropTypes.string,
  use: PropTypes.string
}

export default CIcon

export const CIconWarn = props => {
  colog(
    '@coreui/icons-react: Please use default export since named exports are deprecated'
  )
  return <CIcon {...props}/>
}
