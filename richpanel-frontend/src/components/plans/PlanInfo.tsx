import * as React from "react";
import { useState } from "react";

import "../../styles/planStyles.css";
import { planInterface } from "../../utils/interface/planInterface";
import Divider from "../../commons/Divider";
import PlanTableEntry from "./PlanTableEntry";
import mobxStore from "../../store/mobxStore";

const OverviewDataComp = (planData: any) => {
    
  const [active, setactive] = useState<string>("monthly");

  return (
    <div className="data-row">
      <div className="data-row-container"></div>
      <div className="data-table">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="data-column">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="choice">
                <div className="duration">
                  <a
                    className={active === "monthly" ? "active" : "not-active"}
                    onClick={() => {
                      setactive("monthly");
                      mobxStore.setActive("monthly");
                    }}
                  >
                    Monthly
                  </a>
                  <a
                    className={active === "yearly" ? "active" : "not-active"}
                    onClick={() => {
                      setactive("yearly");
                      mobxStore.setActive("yearly");
                    }}
                  >
                    Yearly
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="data-values"
            >
              <p>{`Monthly Price`}</p>
              <Divider />
              <p>Video Quality</p>
              <Divider />
              <p>Resolution</p>
              <Divider />
              <p>Devices you can watch with</p>
            </div>
          </div>
          {planData?.planData?.map((plan: planInterface) => {
            console.log(plan);
            return (
              <PlanTableEntry
                planName={plan.planName}
                monthlyPrice={plan.monthlyPrice}
                yearlyPrice={plan.yearlyPrice}
                VideoQuality={plan.VideoQuality}
                Resolution={plan.Resolution}
                Device={plan.Device}
                NumberOfScreens={plan.NumberOfScreens}
              />
            );
          })}
        </div>
      </div>
      <div className="next">Next</div>
    </div>
  );
};

export default OverviewDataComp;
