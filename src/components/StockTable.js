import React from "react";
import { Container, Table, Label, Grid } from "semantic-ui-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styled from "styled-components";

import StockModal from "./StockModal";
import {
  isObjectEmpty,
  isNegative,
  isPositive,
  changePercentage,
} from "../utils/helper";

dayjs.extend(relativeTime);

const ChangePercentage = ({ stockDetails, negative, positive }) => {
  if (negative || positive) {
    const percentage = changePercentage(stockDetails);

    return (
      <Label color={percentage > 0 ? "green" : "red"}>
        {`  (${[percentage]})`}{" "}
      </Label>
    );
  }
  return "";
};

const StockTable = ({ stockData }) => {
  return (
    <Grid centered>
      <Grid.Row centered>
        <Grid.Column textAlign="center" tablet={12} mobile={16}>
          <StyledTable celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ticker</Table.HeaderCell>
                <Table.HeaderCell>Price (Change %)</Table.HeaderCell>
                <Table.HeaderCell>Last Update</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {isObjectEmpty(stockData) ? (
                <Container> No Data </Container>
              ) : (
                Object.keys(stockData).map((stock) => {
                  const negative = isNegative(stockData[stock]);
                  const positive = isPositive(stockData[stock]);

                  return (
                    <Table.Row
                      key={stock}
                      negative={negative}
                      positive={positive}
                    >
                      <Table.Cell>{stock.toUpperCase()} </Table.Cell>
                      <Table.Cell>
                        <Grid style={{ width: "100%" }}>
                          <Grid.Row>
                            <Grid.Column tablet={8} mobile={8}>
                              {stockData[stock]
                                .slice(-1)[0]
                                .value.toLocaleString()}
                            </Grid.Column>
                            <Grid.Column tablet={8} mobile={8}>
                              <ChangePercentage
                                stockDetails={stockData[stock]}
                                negative={negative}
                                positive={positive}
                              />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Table.Cell>
                      <Table.Cell>
                        {dayjs().to(dayjs(stockData[stock].slice(-1)[0].date))}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        <StockModal
                          stockDetails={stockData[stock]}
                          stock={stock}
                        />
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              )}
            </Table.Body>
          </StyledTable>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default StockTable;

const StyledTable = styled(Table)`
  margin: auto !important;
  width: 75% !important;
  margin-top: 15px !important;
`;
