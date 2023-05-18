import React from 'react'
import { styled } from 'styled-components'
import CommonButton from './CommonButton'
const ButtonTest = styled(CommonButton)`
    ${(props)=>{
        switch(props.mode){
            case "dark":
                return `
                    background-color : #454545;
                    color : white;
        `
            case "light" :
                return `
                    background-color : white;
                    color : #454545;
                    border : solid 2px #454545;
                `
        }
        
    }}
`

export default function SpecialButton({children, ...rest}) {
  return (
    <ButtonTest {...rest}>{children}</ButtonTest>
  )
}
