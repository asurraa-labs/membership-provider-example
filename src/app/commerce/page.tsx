import { Can } from "@/providers/membership-provider";
import { Fragment } from "react";

const CommercePage = () => {
  return (
    <Fragment>
      <Can componentAbility="commerce">
        <p>commerce page</p>
      </Can>
    </Fragment>
  );
};

export default CommercePage;
