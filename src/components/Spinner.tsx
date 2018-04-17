import * as React from 'react';
import styled from 'styled-components';
import {
  black
} from '../core/colors';

const SpinningDiv = styled.div`
  transform-origin: center center;
  animation: spin 1s infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner-children {
    display: block;
    color: ${black};
  }
`;

const Spinner: React.SFC = ({ children }) => {
  console.log(children);
  return (
    <Container>
      <SpinningDiv>
        {children &&
          <div className="spinner-children">
            {children}
          </div>}
      </SpinningDiv>
    </Container>
  );
};
export default Spinner;
