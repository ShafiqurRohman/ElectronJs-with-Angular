export interface Question {
    id?: string;
    question: string;
    type: string;
    options?: string[];
    symbol?: string;
    numberOfSymbols?: number;
}
