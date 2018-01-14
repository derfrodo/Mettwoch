import * as React from "react";

import { Slider } from "./../../Components/Slider";
import { NumericInput } from "./../../Components/NumericInput";
import { OrderPositionData } from "../interfaces/OrderPositionData";

export const NumericWholeNumbersOrderPostion = (props: OrderPositionData) => {
    return (
        <div className="order-postion">
            Numeric Order:
            <Slider />
            <NumericInput />
        </div>
    );
};

export default NumericWholeNumbersOrderPostion;