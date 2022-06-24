import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import TodoList from "../components/TodoList";

function Todo() {
  const Mobile = useMediaQuery({
    query: "(max-width:820px)",
  });
  const [input, setInput] = useState("");
  const [List, setList] = useState([]);
  const addTodo = () => {
    setList((setList) => [...setList, input]);
    setInput("");
  };

  return (
    <Wrapper>
      <Container>
        <h1 style={{ color: "#9fa4d4" }}>ToDo</h1>
        <Box>
          {Mobile ? (
            <MInputStyle
              placeholder="input text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          ) : (
            <InputStyle
              placeholder="input text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          )}
          {Mobile ? (
            <MBtnStyle onClick={addTodo}>ADD</MBtnStyle>
          ) : (
            <BtnStyle onClick={addTodo}>ADD</BtnStyle>
          )}
        </Box>
      </Container>
      <TodoList List={List} setList={setList} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputStyle = styled.input`
  width: 400px;
  height: 50px;
  padding: 15px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #9fa4d4;
`;
const MInputStyle = styled.input`
  width: 80vw;
  height: 50px;
  padding: 15px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #9fa4d4;
`;
const BtnStyle = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #9fa4d4;
  color: white;
  cursor: pointer;
`;
const MBtnStyle = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #9fa4d4;
  color: white;
  cursor: pointer;
`;
export default Todo;
