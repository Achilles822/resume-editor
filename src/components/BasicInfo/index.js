import React from "react";
import styles from "./index.module.css";
import wechatImg from "../../assets/images/wechat.jpeg";
function BasicInfo(props) {
  console.log(props);
  let { phoneNumber, blogAddress, email, github, name, title } = props.data;
  return (
      <div className={styles.container}>
        <div className={styles.wechat}>
          <img src={wechatImg} alt="wechat" />
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            {/* <span className="iconfont icon-Phone"></span> */}
            {phoneNumber}
          </div>
          <div className={styles.item}>
            {/* <span className="iconfont icon-Phone"></span> */}
            {email}
          </div>
          <div className={styles.item}>
            {/* <span className="iconfont icon-Phone"></span> */}
            {blogAddress}
          </div>
          <div className={styles.item}>
            {/* <span className="iconfont icon-Phone"></span> */}
            {github}
          </div>
        </div>
        <div className={styles.rightInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
  );
}

export default BasicInfo;
