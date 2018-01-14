import * as React from "react";

// views
import { OrderView, OrderViewProps } from "./views/OrderView";

// props and data
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import * as ActionCreators from "./redux/actionCreators";
import { AppState } from "../redux/index";

type PropsPick = Pick<OrderViewProps, keyof OrderViewProps>;

export const OrderFunctional = (props: OrderViewProps) => (
    <OrderView {...props} />
);

const mapStateToProps =
    (state: AppState, ownProps: PropsPick): PropsPick => (
        {
            ...ownProps,
            order: state.order.orderData,
        });

const mapDispatchToProps = (dispatch: Dispatch<{}>, ownProps: OrderViewProps): OrderViewProps => {
    let boundActions = bindActionCreators({ setPosition: ActionCreators.setOrderPositionValue }, dispatch);
    return ({
        ...ownProps,
        ...boundActions
    });
};

export const Order = connect(mapStateToProps, mapDispatchToProps
)(OrderFunctional);

export default Order;