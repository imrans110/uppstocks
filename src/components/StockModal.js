import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import styled from "styled-components";

import StockChart from "./StockChart";

const StockModal = ({ stockDetails, stock }) => {
  return (
    <Modal
      trigger={
        <Button basic>
          <StyledIcon name="eye" />
        </Button>
      }
      header={stock.toUpperCase() + " Chart History"}
      content={<StockChart stockDetails={stockDetails} />}
      actions={[{ key: "done", content: "Close", positive: true }]}
    />
  );
};

export default StockModal;

const StyledIcon = styled(Icon)`
  margin: 0 !important;
`;
