import * as React from "react";
import RCSlider from "rc-slider";
import { NumberMeta } from "../Order/interfaces/NumberMeta";

// tslint:disable:no-any
interface SliderProps {
    value?: number;
    onChanged?: ((value: number) => any);
    meta?: NumberMeta;
}
export const Slider = ({ value, onChanged, meta }: SliderProps) => (
    <div>
        <RCSlider
            value={value || 0}
            onChange={onChanged}
            min={meta && meta.minimum}
            max={meta && meta.maximum}
            step={meta && meta.stepSize}
            
        />
    </div>
);

export default Slider;