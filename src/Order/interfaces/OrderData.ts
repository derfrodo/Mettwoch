import { OrderPositionData } from "./OrderPositionData";

export interface OrderData {
    // Something like "Mettwoch"
    name: string;
    
    label: string;
    
    positions: OrderPositionData[];
}
