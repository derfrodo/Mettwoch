export interface NumberMeta {

    minimum?: number;
    maximum?: number;

    stepSize?: number;

    /**
     * may even be negative (-1 shall round 123 to 120 ...)
     */
    precision?: number;
}
