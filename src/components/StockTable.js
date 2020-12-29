import React from "react";
import { Table } from "semantic-ui-react";
import dayjs from "dayjs";

import StockModal from "./StockModal";

const StockTable = ({ stockData }) => {
  const isNegative = (stockDetails) => {
    return (
      stockDetails.length > 1 &&
      stockDetails[stockDetails.length - 1].value <
        stockDetails[stockDetails.length - 2].value
    );
  };

  const isPositive = (stockDetails) => {
    return (
      stockDetails.length > 1 &&
      stockDetails[stockDetails.length - 1].value >
        stockDetails[stockDetails.length - 2].value
    );
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ticker</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Last Update</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.keys(stockData).map((stock) => (
          <Table.Row
            key={stock}
            negative={isNegative(stockData[stock])}
            positive={isPositive(stockData[stock])}
          >
            <Table.Cell>{stock.toUpperCase()} </Table.Cell>
            <Table.Cell>
              {stockData[stock].slice(-1)[0].value.toLocaleString()}
            </Table.Cell>
            <Table.Cell>
              {dayjs(stockData[stock].slice(-1)[0].date).format(
                "DD MMM h:mm a"
              )}
            </Table.Cell>
            <Table.Cell>
              <StockModal stockDetails={stockData[stock]} stock={stock} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default StockTable;
