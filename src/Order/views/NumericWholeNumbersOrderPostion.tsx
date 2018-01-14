import * as React from "react";

// import { Slider } from "./../../Components/Slider";
import { NumericInput } from "./../../Components/NumericInput";
import PositionHelper from "../utils/PositionHelper";
import { OrderPositionProps } from "../interfaces/OrderPositionProps";

export const NumericWholeNumbersOrderPostion = (props: OrderPositionProps) => {
    return (
        <div className="container-flex">
            <div className="row order-position-row">
                <div className="col-sm-4 order-position-cell" >
                    <div className="order-position-label">
                        <div className="label-text">
                            {PositionHelper.getLabel(props.data)}
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 order-position-cell">
                    <div className="order-position-input">
                        <div className="input-controls">
                            <NumericInput
                                value={PositionHelper.getNumericValue(props.data)}
                                onChanged={(nextValue) => props.setPosition(props.data.value.id, nextValue)}
                                meta={props.data.info.numberMeta}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-4">
                    <Slider
                        value={PositionHelper.getNumericValue(props.data)}
                        onChanged={(nextValue) => props.setPosition(props.data.value.id, nextValue)}
                        meta={props.data.info.numberMeta}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default NumericWholeNumbersOrderPostion;