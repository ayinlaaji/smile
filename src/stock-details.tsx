import { Date, Price } from "./types";

interface StockDetailProps {
  readonly date: Date;
  readonly close: Price;
}

const StockDetails = ({ date, close }: StockDetailProps) => (
  <div className="details-container">
    <h2>Stock Details</h2>
    <p>Date: {date}</p>
    <p>Close: {close}</p>
  </div>
);

export type { StockDetailProps };
export { StockDetails };
