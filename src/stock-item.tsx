import { Close, Date, Open, StockId } from "./types";

enum Status {
  UP = "UP",
  DOWN = "DOWN",
}

interface UIStock {
  readonly id: StockId;
  readonly close: Close;
  readonly date: Date;
  readonly open: Open;
}

interface StockItemHandlerProps {
  handleDoubleClick: (stockId: StockId) => void;
}

type StockItemProps = UIStock & StockItemHandlerProps;

// FIXME: Ideally this would exist in the transformers not in the component file
const status = (open: Open, close: Close): Status =>
  close > open ? Status.UP : Status.DOWN;

const StockItem = ({
  id,
  close,
  open,
  date,
  handleDoubleClick,
}: StockItemProps) => (
  <div className="grid-row" onDoubleClick={() => handleDoubleClick(id)}>
    <span>{`${date} - Open: ${open}, Close: ${close}`}</span>
    <span style={{ paddingLeft: "1rem" }}>{status(open, close)}</span>
  </div>
);

export { StockItem };
export type { StockItemProps, UIStock };
