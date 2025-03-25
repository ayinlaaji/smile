import { v4 as uuid } from "uuid";
import { mockData } from "./data";
import { StockId, StockDetail, Stock } from "./types";
import { UIStock } from "./stock-item";

const defaultDetail = { name: "", sector: "", description: "", date: "" };

interface IStockService {
  getStocks(): ReadonlyArray<UIStock>;
  getStockDetail(stockId: StockId): Promise<StockDetail>;
}

class StockService implements IStockService {
  private intervalId: NodeJS.Timeout | null = null;
  private instance!: StockService;
  private stocksDb = new Map();

  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  private formatStock({ close, date, open }: Stock): UIStock {
    return {
      id: uuid(), // FIXME: I would expect the data to have id fields
      date,
      open: parseFloat(open).toFixed(2),
      close: parseFloat(close).toFixed(2),
    };
  }

  public getStocks(): ReadonlyArray<UIStock> {
    if (this.stocksDb.size < 1) {
      mockData.map(this.formatStock).forEach((data) => {
        this.stocksDb.set(data.id, data);
      });
    }
    return Array.from(this.stocksDb.values());
  }

  public async getStockDetail(stockId: StockId): Promise<StockDetail> {
    clearTimeout(this.intervalId as NodeJS.Timeout);
    const _this = this;
    return new Promise((resolve, reject) => {
      this.intervalId = setTimeout(() => {
        const stockDate = _this.stocksDb.get(stockId).date;
        resolve({
          name: "Mock Company",
          sector: "Technology",
          description: `This is a mock company for demo purposes. Selected stock date: ${stockDate}.`,
        });
      }, 3000);
    });
  }
}

export { StockService };
