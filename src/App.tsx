import "./styles.css";
import { StockList } from "./stock-list";
import { useStocks } from "./use-stocks";
import { StockDetails } from "./stock-details";

const Loading = () => <div> Loading .... </div>;

const App = () => {
  const { isRequesting, getStockDetail, stockDetails, stocks } = useStocks();
  return (
    <div className="app-container">
      <StockList handleDoubleClick={getStockDetail} stocks={stocks} />
      {isRequesting ? (
        <Loading />
      ) : (
        stockDetails && <StockDetails {...stockDetails} />
      )}
    </div>
  );
};

export default App;
