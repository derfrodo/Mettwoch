import * as React from "react";
import { OrderPositionProps } from "../interfaces/OrderPositionProps";

export const UnknownOrderPosition = ({ data: { info } }: OrderPositionProps) => (
    <div>
        Unknown order position type: {(!!info) ? info.type : "no template"}
    </div>
);

export default UnknownOrderPosition;
