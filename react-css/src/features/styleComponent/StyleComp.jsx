import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color : blue;
    background-color : yellow;
`;

// const StyledButton이라는 이름으로
// a태그에 color값, background-color값을 이용하여
// 작성하세요

const StyledButton = styled.a`
    color : red;
    background-color : black;
`

export default function StyleComp(props) {
  return (
    <div>
        <Title>
            {props.children}
        </Title>
        <StyledButton>
            버튼
        </StyledButton>
    </div>
  )
}
