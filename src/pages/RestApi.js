import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import axios from "axios";

function RestApi() {
  const Mobile = useMediaQuery({
    query: "(max-width:640px)",
  });
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  async function createUser() {
    try {
      const data = await axios.post("https://reqres.in/api/users", {
        name: name,
        job: job,
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Wrapper>
      <Container>
        <h1 style={{ color: "#9fa4d4" }}>User Post</h1>
        {Mobile ? (
          <>
            <MInputStyle
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <MInputStyle
              placeholder="job"
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
            <MBtnStyle onClick={createUser}>POST</MBtnStyle>
          </>
        ) : (
          <>
            <InputStyle
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <InputStyle
              placeholder="job"
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
            <BtnStyle onClick={createUser}>POST</BtnStyle>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #9fa4d4;
  color: white;
  cursor: pointer;
`;
const MBtnStyle = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #9fa4d4;
  color: white;
  cursor: pointer;
`;
export default RestApi;
