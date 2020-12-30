import React from "react";
import { Segment, Image } from "semantic-ui-react";
import styled from "styled-components";

import StockTable from "../components/StockTable";
import NewWebSocket from "../components/NewWebSocket";
import UppstocksLogo from "../assets/Uppstocks.png";

const Dashboard = () => {
  return (
    <StyledSegment textAlign="center">
      <Image src={UppstocksLogo} size="tiny" centered />
      <NewWebSocket>
        <StockTable />
      </NewWebSocket>
    </StyledSegment>
  );
};

export default Dashboard;

const StyledSegment = styled(Segment)`
  background: ${(props) => props.theme.secondary} !important;
  min-height: 100% !important;
`;
