import { OrderPositionData } from "./OrderPositionData";

export interface OrderData {
    // Something like "Mettwoch"
    name: string;
    
    positions: OrderPositionData[];
}
