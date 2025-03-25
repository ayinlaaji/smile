import { useState } from "react";
import { StockId, StockDetail, Stock } from "./types";
import { StockService } from "./stock-service";
import { UIStock } from "./stock-item";

const stockService = new StockService();

const useStocks = () => {
  const [stocks] = useState<ReadonlyArray<UIStock>>(stockService.getStocks());
  const [isRequesting, setIsRequesting] = useState<Boolean>(false);
  const [stockDetails, setStockDetails] = useState<StockDetail>();

  const getStockDetail = async (stockId: StockId) => {
    setIsRequesting(true);
    const result = setStockDetails(await stockService.getStockDetail(stockId));
    setIsRequesting(false);
  };

  return { isRequesting, getStockDetail, stockDetails, stocks };
};

export { useStocks };
