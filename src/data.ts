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

export { mockData };
