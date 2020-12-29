import React from "react";
import { Button, Modal } from "semantic-ui-react";

import StockChart from "./StockChart";

function ModalExampleShorthand({ stockDetails, stock }) {
  return (
    <Modal
      trigger={<Button>Show Details</Button>}
      header={stock.toUpperCase() + " Chart History"}
      content={<StockChart stockDetails={stockDetails} />}
      actions={[{ key: "done", content: "Close", positive: true }]}
    />
  );
}

export default ModalExampleShorthand;
