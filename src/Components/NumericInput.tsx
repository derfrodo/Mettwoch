import * as React from "react";
import * as NumInput from "react-numeric-input";
import { NumberMeta } from "../Order/interfaces/NumberMeta";

// tslint:disable:no-any
interface NumericProps {
    value?: number | string;
    onChanged?: ((value: number) => any);
    meta?: NumberMeta;
}

export const NumericInput = ({ value, onChanged, meta }: NumericProps) => (
    <div>
        <NumInput
            value={value || 0}
            onChange={onChanged}
            min={meta && meta.minimum}
            max={meta && meta.maximum}
            step={meta && meta.stepSize}

        />
    </div>
);

export default NumericInput;