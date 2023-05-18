import React from 'react'
// module.css로 바꿔서 div에 적용시켜보아라
import styles from './inputform.module.css'

// react에서 css는 같은 이름의 css일 경우 가장 나중에 만들어져 적용되는
// css를 덮어씌워 적용시켜버린다.
// 아무튼 동일한 이름을 쓰면 한쪽은 한쪽을 덮어버린다는 것
export default function InputForm() {
  return (
    <div >
      <p className={`${styles.color}`}>
        {styles.color}
      </p>
      {/** 가장 가까이 있는 css파일이 먼저 적용된다. 
       * inputform.module.css는 같은 폴더 내에 있으므로 
       * 이 파일이 먼저 적용된다.
      */}
      <a href="" className={`${styles.color} App-link`}>app에 있는 css를 가져옵니다.</a>
    </div>
  )
}
