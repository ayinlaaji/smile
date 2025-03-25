//  Business domain types

type Price = string;

type Close = Price;
type High = Price;
type Low = Price;
type Open = Price;

type Description = string;
type StockId = string;
type Name = string;
type Sector = string;
type Volume = string;
type Date = string;

interface Stock {
  readonly close: Close;
  readonly date: Date;
  readonly high: High;
  readonly low: Low;
  readonly open: Open;
  readonly volume: Volume;
}

interface StockDetail {
  readonly name: Name;
  readonly sector: Sector;
  readonly description: Description;
}

export type {
  Close,
  Date,
  Description,
  Name,
  Open,
  Price,
  Sector,
  Stock,
  StockDetail,
  StockId,
};
