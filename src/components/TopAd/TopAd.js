import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: block;
  margin: 15px auto 50px;
  width: 970px;
`;
const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 970px;
  height: 50px;
  border: 1px solid grey;
  background-color: lightgrey;
  margin-bottom: 30px;
  font-size: x-large;
`;
const Billboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 970px;
  height: 250px;
  border: 1px solid grey;
  background-color: lightgrey;
  margin-bottom: 30px;
  font-size: x-large;
`;

const TopAd = () => {
  return (
    <Container>
      <Frame>
        <p>Top Frame 970x50</p>
      </Frame>
      <Billboard>
        <p>Billboard 970x250</p>
      </Billboard>
    </Container>
  );
};

export default TopAd;
