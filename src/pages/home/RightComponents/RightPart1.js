import React from "react";
import style from "./rightSection.module.css";
import RightPart3 from "./RightPart3";
import RightPart2 from "./RightPart2";

function RightPart1() {
  return (
    <div >
      <div className={style.RightSection}>
        {/* RightPart1 */}
        <div className={style.searchBar}>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search Tweeter" />
        </div>
      </div>
      <RightPart2 />
      <RightPart3 />
    </div>
  );
}

export default RightPart1;
