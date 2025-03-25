import "./styles.css";

import { StockDetails } from "./stock-details";
import { stocks as mockStocks } from "./data";

import { StockList } from "./stock-list";
import { StockId } from "./types";
import { useState } from "react";

const defaultDetail = { date: "", close: "" };

const useStocks = () => {

  const [stocks] = useState(mockStocks);
  const [selectedDetail, setSelectedDetail] = useState('');
  const [stockDetails, setStockDetails] = useState(defaultDetail);

  const getStockDetail = (stockId: StockId) => {
    const { date, close } = stocks.find((stock) => stock.id === stockId) || defaultDetail; // using object/hash O(1) would be better here instead of doing a find which would have a time complexity of O(n)
    setSelectedDetail(stockId)
    setStockDetails({ date, close });
  }

  return {selectedDetail, getStockDetail,  stockDetails, stocks}
}

const App = () => {
  const {selectedDetail, getStockDetail,  stockDetails, stocks} = useStocks()
  return (
    <div className="app-container">
      <StockList handleDoubleClick={getStockDetail} stocks={stocks} />
      {selectedDetail && <StockDetails {...stockDetails} />}
    </div>
  );
};

export default App;
