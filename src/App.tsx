import styled from "styled-components";
import Timer from "./components/Timer";
import PlayBtn from "./components/PlayBtn";
import Goals from "./components/Goals";

const Wrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  background-color: tomato;
  box-sizing: border-box;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: white;
`;

function App() {
  return (
    <Wrap>
      <Title>Pomodoro</Title>
      <Timer />
      <PlayBtn />
      <Goals />
    </Wrap>
  );
}

export default App;
