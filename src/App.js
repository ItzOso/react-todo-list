import Header from "./components/Header";
import Todos from "./components/Todos";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <Header/>
      <Todos/>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`

export default App;
