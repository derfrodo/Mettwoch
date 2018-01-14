import * as React from "react";
import * as NumInput from "react-numeric-input";

// tslint:disable:no-any
interface NumericProps {
    value?: number | string;
    onChanged?: ((value: number) => any);
}
export const NumericInput = ({ value, onChanged }: NumericProps) => (
    <div>
        <NumInput value={value} onChange={onChanged} />
    </div>
);

export default NumericInput;