import React from 'react'
import icon from '../logo.svg'

const Logo = ({logo, height, width, id, styleName}) => (
  <div>
     <img
      src={icon}
      height={height}
      width={width}
      alt="logo"
      className={`${ styleName }`}
      />
  </div>
)

export default Logo
