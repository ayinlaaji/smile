import { StockItem, StockItemProps } from "./stock-item";
import { StockId } from "./types";

interface StockListProps {
  stocks: ReadonlyArray<Omit<StockItemProps, "handleDoubleClick">>;
  handleDoubleClick: (stockId: StockId) => void;
}

const StockList = ({ stocks, handleDoubleClick }: StockListProps) => (
  <div className="grid-container">
    {stocks.map((stock) => (
      <StockItem
        key={stock.id}
        handleDoubleClick={handleDoubleClick}
        {...stock}
      />
    ))}
  </div>
);

export { StockList };
