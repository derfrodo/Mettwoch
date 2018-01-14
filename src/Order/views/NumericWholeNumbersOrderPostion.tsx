import * as React from "react";

import { Slider } from "./../../Components/Slider";
import { NumericInput } from "./../../Components/NumericInput";
import PositionHelper from "../utils/PositionHelper";
import { OrderPositionProps } from "../interfaces/OrderPositionProps";

export const NumericWholeNumbersOrderPostion = (props: OrderPositionProps) => {
    return (
        <div className="container-flex">
            <div className="row">
                <div className="col-sm-4">
                    {PositionHelper.getLabel(props.data)}
                </div>
                <div className="col-sm-4">
                    <Slider
                        value={PositionHelper.getNumericValue(props.data)}
                        onChanged={(nextValue) => props.setPosition(props.data.value.id, nextValue)}
                    />
                </div>
                <div className="col-sm-4">
                    <NumericInput
                        value={PositionHelper.getNumericValue(props.data)}
                        onChanged={(nextValue) => props.setPosition(props.data.value.id, nextValue)}
                    />
                </div>
            </div>
        </div>
    );
};

export default NumericWholeNumbersOrderPostion;