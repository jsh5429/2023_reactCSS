import React from 'react'
import { styled } from 'styled-components'

const Button = styled.a`
    padding: ${props=>props.padding}px;
    color : ${props=>props.color};
    background-color: ${props=>props.bgcolor};
    margin: ${props=>props.margin}px;
    display: ${props=>props.display};
`

//스타일드 컴포넌트를 통해서 a태그를 디자인하고
// padding,
// onClick이벤트를 이용해서 alert창을 출력하세요
// >> App.js에 MyButton 호출하신 후에 출력
// ...rest는 이벤트 prop값도 가져와준다.
export default function MyButton({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}
