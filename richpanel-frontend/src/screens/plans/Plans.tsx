import * as React from "react";
import { useState, useEffect } from "react";

import { getPlansData } from "../../utils/apiHandling/plansAPI";
import {planInterface} from "../../utils/interface/planInterface";
import OverviewDataComp from "../../components/plans/PlanInfo";

function Plans() {
  const [plansData, setplansData] = useState<planInterface>();

  useEffect(() => {
    getPlansData(setplansData);
  }, []);
  return (
    <>
      <h1>Choose the right plan for you</h1>
      <br></br>
      <OverviewDataComp planData={plansData} />
    </>
  );
}

export default Plans;
