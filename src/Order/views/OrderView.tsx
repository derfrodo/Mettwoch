import * as React from "react";

// views
import { OrderPostion } from "./OrderPosition";

import { Action } from "redux";
import { RouteComponentProps } from "react-router";

import { OrderData } from "../interfaces/OrderData";
import { PositionId, PostionValue } from "../interfaces/OrderPositionValue";

export interface OrderViewProps extends RouteComponentProps<{}> {
    order: OrderData | undefined;
    setPosition: (id: PositionId, nextValue: PostionValue) => Action;
}

export const OrderView = (props: OrderViewProps) => {

    const orderPositions = props.order && props.order.positions.map((p, i) =>
        (
            <OrderPostion
                key={p.value ? p.value.id : i}
                setPosition={props.setPosition}
                data={p}
            />));

    return (
        <div>
            <h1>Place your Order</h1>
            {orderPositions}
        </div>
    );
};
