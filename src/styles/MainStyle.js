import styled from "styled-components";

export const MainContainer = styled.div`
  background : white;
  width : 40rem;
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  align-items : center;

  hr {
    width : 35rem;
    border : 0;
    border-top: 1.5px solid #c3d876;
    margin : 0 0 1rem 0;
  }
`
export const InputContainer = styled.div`
  width : 40rem;
  height : 8rem;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : row;
  justify-content: space-between;
  margin : 3rem 0 1rem 0;

  input {
    width : 28rem;
    height : 4rem;
    margin : auto 1rem;
    padding : 0 0 0 1rem;
    border : none;
    border-radius : 1.5rem;
    background-color : rgba(198, 220, 118, 0.25);
    box-shadow : 0.15rem 0.15rem 0.15rem 0.15rem #d6d6d6;
    &:focus {
      outline:none;
    }

  }
  button {
    width : 7rem;
    height : 4rem;
    border : none;
    border-radius : 1.5rem;
    margin : auto 1rem;
    background-color : #C6DC76;
    color : white;
    font-size : 1.5rem;
    font-weight : bold;
    cursor : pointer;
    box-shadow : 0.1rem 0.1rem 0.1rem 0.1rem #b6b6b6;
  }
`