import * as React from "react";

// views
import { OrderPostion } from "./views/OrderPosition";

// props and data
import { RouteComponentProps } from "react-router";
import { OrderPositionTypes } from "./constants/OrderTypes";
import { OrderData } from "./interfaces/OrderData";

export const Order = (props: RouteComponentProps<OrderData>) => (
    <div>
        <h1>Place your Order</h1>
        <OrderPostion info={{ type: OrderPositionTypes.numericWholeNumber, label: "" }} />
        <OrderPostion info={{ type: OrderPositionTypes.unknown, label: "" }} />
    </div>
);

export default Order;
