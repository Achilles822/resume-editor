import React from 'react'
import styles from './index.module.css'

function OpenSourceInfo (props) {
  let { title, projects } = props.data
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span>
        {projects.map(item => {
          return (
            <div className={styles.item} key={item.projectName}>
              <div className={styles.projectName}>{item.projectName}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          )
        })}
      </span>
      <span className='divider'></span>
      <span className={styles.title}>写在最后｜THE END</span>
      <div className={styles.context}>感谢阅读。我的联系方式在最顶部，欢迎随时与我联系，谢谢！</div>
    </div>
  )
}
export default OpenSourceInfo
