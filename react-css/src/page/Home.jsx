import React from 'react'
import CommonButton from '../features/styleComponent/CommonButton'
import SpecialButton from '../features/styleComponent/SpecialButton'
import MyButton from '../features/styleComponent/MyButton'
import StyleComp from '../features/styleComponent/StyleComp'
import StyledButton from '../features/styleComponent/StyledButton'
import CounterComp from '../features/counter/CounterComp'
import InputForm from '../features/inputform/InputForm'
import MyLink from '../features/styleComponent/MyLink'

export default function Home() {
  return (
    <div>
        <MyLink to='/about'>About</MyLink>
        <CounterComp />
        <InputForm />
        <StyleComp >스타일드 컴포넌트</StyleComp>
        <StyleComp >스타일드 컴포넌트</StyleComp>
        <StyledButton color='red' bgcolor='pink'
            fontsize='3'
            onClick={(e)=>{
            e.preventDefault();
            console.log('이벤트');
            }}
        >
            버튼
        </StyledButton>
        <br/>
        <MyButton color='white' bgcolor='blue' padding='10' margin='20'
        display='inline-block'
            onClick={(e)=>{
            e.preventDefault();
            alert("Warning!");
            }}
        >
            누르면 알람 창이 뜹니다
        </MyButton>
        <br />
        <CommonButton color='red'>버튼 확인</CommonButton>
        <SpecialButton mode="light">버튼 디자인</SpecialButton>
    </div>
  )
}
