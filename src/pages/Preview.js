import React from "react";
import { mock } from "../mock/data";
import BasicInfo from "../components/BasicInfo";
import EducationInfo from "../components/EducationInfo";
import WorkInfo from "../components/WorkInfo";
import OpenSourceInfo from "../components/OpenSourceInfo"
function Preview() {
  return (
    <div>
      {mock.map((item) => {
        return <div key={item.id}>{controlDisplay(item)}</div>;
      })}
    </div>
  );
}

function controlDisplay(item) {
  switch (item.type) {
    case "BASIC_INFOMATION":
      return <BasicInfo data={item}></BasicInfo>;
    case "EDUCATION_EXPERIENCE":
      return <EducationInfo data={item}></EducationInfo>;
    case "WORK_EXPERIENCE":
      return <WorkInfo data={item}></WorkInfo>;
    case "OPEN_SOURCE":
      return <OpenSourceInfo data={item}></OpenSourceInfo>
    default:
      return null;
  }
}
export default Preview;
