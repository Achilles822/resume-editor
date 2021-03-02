import React from 'react'
import styles from './index.module.css'
function EducationInfo (props) {
  let {
    universityName,
    startYear,
    endYear,
    degree,
    description,
    major,
    englishLevel,
    brightenedDots
  } = props.data
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>教育经历｜EDUCATION EXPERIENCE</span>
      </div>
      <span className={styles.info}>
        {universityName}|{startYear}-{endYear}|{degree}|{major}|{englishLevel}
      </span>
      <span className={styles.desc}>{description}</span>
      <span className='divider'></span>
      <div className={styles.title}>
        <span>技能｜Skills</span>
      </div>
      <div className={styles.dot}>
        {brightenedDots.map(dot => {
          return <li>{dot}</li>
        })}
      </div>
      <span className='divider'></span>
    </div>
  )
}

export default EducationInfo
