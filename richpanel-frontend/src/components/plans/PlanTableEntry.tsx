import React, { useState } from "react";

import "../../styles/planStyles.css";
import Divider from "../../commons/Divider";
import { planInterface } from "../../utils/interface/planInterface";
import mobxStore from "../../store/mobxStore";

function PlanTableEntry({
  planName,
  monthlyPrice,
  yearlyPrice,
  VideoQuality,
  Resolution,
  Device,
  NumberOfScreens,
}: planInterface) {

  const [planType, setplanType] = useState<string | undefined>("Basic");

  const deviceName: string[] | undefined = Device?.split("+");

  return (
    <div className="data-column">
      <div className={planType === planName ? "selector" : "selector"}>
        <div
          onClick={() => {
            setplanType(planName);
          }}
        >
          {planName}
        </div>
      </div>
      <div className="data-values">
        <p>{mobxStore.active === "monthly" ? monthlyPrice : yearlyPrice} INR</p>
        <Divider />
        <p>{VideoQuality}</p>
        <Divider />
        <p>{Resolution}</p>
        <Divider />
        {deviceName?.map((device: string) => {
          return <p>{device}</p>;
        })}
      </div>
    </div>
  );
}

export default PlanTableEntry;
