import * as React from "react";
import { OrderPositionData } from "../interfaces/OrderPositionData";

export const UnknownOrderPosition = ({ info }: OrderPositionData) => (
    <div>
        Unknown order position type: {(!!info) ? info.type : "no template"}
    </div>
);

export default UnknownOrderPosition;
