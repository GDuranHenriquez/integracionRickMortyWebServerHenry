import React from 'react'
import styled from 'styled-components';

const StyleNoFound = styled.div`
  width: 100%;
  height: 100%;
  background-color = black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`


export default function PageNotFound() {
  return (
    <StyleNoFound>
        <p>404 Page not found</p>
    </StyleNoFound>

  );
}

