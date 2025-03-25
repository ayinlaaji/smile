import { v4 as uuid } from 'uuid';
import { StockItemProps } from "./stock-item";
import { Stock } from "./types";

// Notice I am still keeping the shape of the data sent by the backend

const mockData: ReadonlyArray<Stock> = [
  {
    close: "152.50",
    date: "2025-03-20",
    high: "153.00",
    low: "149.50",
    open: "150.00",
    volume: "1000000",
  },
  {
    date: "2025-03-21",
    open: "152.50",
    close: "151.00",
    high: "154.00",
    low: "150.00",
    volume: "1200000",
  },
  {
    date: "2025-03-22",
    open: "151.00",
    close: "153.75",
    high: "155.00",
    low: "150.50",
    volume: "900000",
  },
];

const formatStock = ({
  close,
  date,
  open,
}: Stock): Omit<StockItemProps, "handleDoubleClick"> => {
  return {
    id: uuid(), // FIXME: I would expect the data to have id fields
    date,
    open: parseFloat(open).toFixed(2),
    close: parseFloat(close).toFixed(2),

  };
};

const stocks = mockData.map(formatStock);
export { stocks };
