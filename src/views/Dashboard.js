import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import styled from "styled-components";

import StockTable from "../components/StockTable";
import NewWebSocket from "../components/NewWebSocket";

const Dashboard = () => {
  return (
    <div>
      <StyledSegment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <NewWebSocket>
                <StockTable />
              </NewWebSocket>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StyledSegment>
    </div>
  );
};

export default Dashboard;

const StyledSegment = styled(Segment)`
  background: ${(props) => props.theme.secondary} !important;
`;
