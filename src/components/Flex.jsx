import styled from "styled-components";
import React from "react";

const FlexContainer = styled.section`
  display: flex;
  margin: 20px 0;
  flex-direction: ${({ direction }) => direction || "row"};
  /* align-items: ${({ align }) => align || "center"}; */
  justify-content: ${({ justify }) => justify || "space-between"};
`;

function Flex(props) {
  return <FlexContainer {...props}>{props.children}</FlexContainer>;
}

export default Flex;