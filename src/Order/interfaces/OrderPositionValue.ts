export type PostionValue = number | string | (number | string)[];
export type PositionId = number | string;

export interface OrderPositionValue {
    id: PositionId;
    value: PostionValue;
}