import React from 'react'
import { styled } from 'styled-components'

// 스타일드 컴포넌트를 통해서 버튼 생성
const Button = styled.a`
    color: ${props => props.color};
    background-color: ${props=>props.bgcolor};
    /** font-size를 받아와서 그 크기대로 출력 */
    font-size: ${props=>props.fontsize}rem;
`
// props값의 color가 blue에 들어가도 tomato 색으로 고정된다.
const TomatoButton = styled(Button)`
  color: tomato;
`
// ...rest는 나머지 연산자로 남은 매개변수의 값들을 배열/객체로 들고온다.
export default function StyledButton({children, ...rest}) {
    /** 아래 ...은 스프레드 연산자로 안의 값을 풀어서 씀 */
    console.log(rest);
  return (
    // rest 안에 prop들이 다 풀어져서 들어간다.
    // prop값으로 뭐가 들어갈지 모르거나 prop값이 너무 많으면
    // ...rest로 써넣어 대체할 수 있다.
    <TomatoButton {...rest}>{children}</TomatoButton>
  )
}
