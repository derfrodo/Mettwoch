import * as React from "react";

// views
import { OrderPostion } from "./OrderPosition";

import { Action } from "redux";
import { RouteComponentProps } from "react-router";

import { OrderData } from "../interfaces/OrderData";
import { PositionId, PostionValue } from "../interfaces/OrderPositionValue";

export interface OrderViewProps extends RouteComponentProps<{}> {
    order: OrderData;
    setPositionValue: (id: PositionId, nextValue: PostionValue) => Action;
}

export const OrderView = (props: OrderViewProps) => {

    const orderPositions = props.order && props.order.positions.map((p, i) => (
        <OrderPostion
            key={p.value ? p.value.id : i}
            setPosition={props.setPositionValue}
            data={p}
        />));

    return (
        <div>
            <h1>{props.order.label}</h1>
            {orderPositions}
        </div>
    );
};
