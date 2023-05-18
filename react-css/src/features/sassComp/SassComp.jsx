import React from 'react'
// sass를 그냥 import할 수도 있고
// module로 import해서 사용할 수 있다.
import style from './sass.module.scss'

export default function SassComp() {
  return (
    <div className={style.color}>SassComp</div>
  )
}
