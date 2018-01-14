type PostionValue = number | string;

export interface OrderPositionValue {
    id: string;
    value: PostionValue | Array<PostionValue>;
}