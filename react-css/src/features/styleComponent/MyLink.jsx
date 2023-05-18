import React from 'react'
import { styled } from 'styled-components'
import {Link} from 'react-router-dom'
import style from '../sassComp/sass.module.scss'

const StyleLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffb938;
    &:hover {
      color : #ff7a38;
    }
    &+div{
      background-color: #badfff;
    }
`

export default function MyLink({children, ...rest}) {
  return (
    <StyleLink {...rest}>{children}</StyleLink>
  )
}
