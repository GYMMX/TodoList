import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

function TodoList(props) {
  const Mobile = useMediaQuery({
    query: "(max-width:640px)",
  });
  const deleteTodo = (item) => {
    props.setList(props.List.filter((i) => i !== item));
  };
  return (
    <Wrapper>
      {Mobile ? (
        <>
          {props.List.map((item, idx) => (
            <MContainer key={idx}>
              <div style={{ color: "#9fa4d4", fontWeight: "bold" }}>
                {idx + 1}
              </div>
              <div style={{ color: "#9fa4d4" }}>{item}</div>
              <MBtnStyle
                onClick={() => {
                  deleteTodo(item);
                }}
              >
                del
              </MBtnStyle>
            </MContainer>
          ))}
        </>
      ) : (
        <>
          {props.List.map((item, idx) => (
            <Container key={idx}>
              <div style={{ color: "#9fa4d4", fontWeight: "bold" }}>
                {idx + 1}
              </div>
              <div style={{ color: "#9fa4d4" }}>{item}</div>
              <BtnStyle
                onClick={() => {
                  deleteTodo(item);
                }}
              >
                del
              </BtnStyle>
            </Container>
          ))}{" "}
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 490px;
`;
const MContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
`;
const BtnStyle = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #9fa4d4;
  color: white;
  cursor: pointer;
`;
const MBtnStyle = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  border-radius: 5px;
  background-color: #9fa4d4;
  color: white;
  cursor: pointer;
`;
export default TodoList;
