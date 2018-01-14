import * as React from "react";
import RCSlider from "rc-slider";

// tslint:disable:no-any
interface SliderProps {
    value?: number;
    onChanged?: ((value: number) => any);
}
export const Slider = ({ value, onChanged }: SliderProps) => (
    <div>
        <RCSlider value={value} onChange={onChanged} />
    </div>
);

export default Slider;