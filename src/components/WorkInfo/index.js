import React from "react";
import styles from "./index.module.css";

function WorkInfo(props) {
  let { companyName, startTime, endTime, position, projects } = props.data;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.timeline}>
          <div className={styles.timelineIcon}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.info}>
            {companyName} |{position} | {startTime}-{endTime}
          </span>
          <span className={styles.desc}>
            {projects.map((item) => {
              return (
                <div className={styles.projectItem} key={item.projectName}>
                  <div className={styles.projectInfo}>
                    {item.projectName} 
                    {/* | {item.startTime}{" "}
                    {item.endTime ? "-" : ""} {item.endTime} */}
                  </div>
                  <span className={styles.projectDesc}>{item.desc}</span>
                </div>
              );
            })}
          </span>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default WorkInfo;
