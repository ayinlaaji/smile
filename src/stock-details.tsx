import { Close, Date, Description, Name, Price, Sector } from "./types";

interface StockDetailProps {
  readonly name: Name;
  readonly sector: Sector;
  readonly description: Description;
}

const StockDetails = ({ name, sector, description }: StockDetailProps) => (
  <div className="details-container">
    <h2>Stock Details</h2>
    <p>Name: {name}</p>
    <p>Sector: {sector}</p>
    <p>Description: {description}</p>
  </div>
);

export type { StockDetailProps };
export { StockDetails };
