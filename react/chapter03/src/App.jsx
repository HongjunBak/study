import './App.css'
import styled from 'styled-components';

const SimpleButton = styled.button`
  marign: 20px; padding: 5px 10px;
  color: #f6f6f6; background: #02f;
  border: 0; outline: 0; border-radius: 15px;
`;

const LargeButton = styled(SimpleButton) `
  font-size: 42px;
`;

function App() {
  return (
    <>
      <SimpleButton>Simple Btn</SimpleButton>
      <LargeButton>Large Btn</LargeButton>
    </>
  )
}

export default App