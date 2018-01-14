import * as React from "react";

import { Slider } from "./../../Components/Slider";
import { NumericInput } from "./../../Components/NumericInput";
import { OrderPositionData } from "../interfaces/OrderPositionData";
import PositionHelper from "../utils/PositionHelper";

export const NumericWholeNumbersOrderPostion = (props: OrderPositionData) => {
    return (
        <div className="container-flex">
            <div className="row">
                <div className="col-sm-4">
                    {PositionHelper.getLabel(props)}
                </div>
                <div className="col-sm-4">
                    <Slider />
                    <NumericInput />
                </div>
            </div>

        </div>
    );
};

export default NumericWholeNumbersOrderPostion;