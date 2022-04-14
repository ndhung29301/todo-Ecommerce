import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
const Box = styled.div`
 background-color: #61dafb;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text= styled.p`
  font-size: 24px;
  color: pink;
`
function App() {

  return (

<Box>
  <Text>
    hungnd
  </Text>
</Box>



  );
}

export default App;
