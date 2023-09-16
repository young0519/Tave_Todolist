import styled from "styled-components";

export const MainContainer = styled.div`
  background : white;
  width : 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  align-items : center;

  hr {
    width : 87rem;
    border : 0;
    border-top: 1.5px solid #c3d876;
    margin : 0 0 1rem 0;
  }
`
export const InputContainer = styled.div`
  width : 87rem;
  height : 8rem;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : row;
  justify-content: space-between;
  margin : 3rem 0 1rem 0;

  input {
    width : 65rem;
    height : 5rem;
    margin : auto 1rem;
    border : none;
    border-radius : 1.5rem;
    background-color : rgba(198, 220, 118, 0.25);
    box-shadow : 0.15rem 0.15rem 0.15rem 0.15rem #d6d6d6;
  }
  button {
    width : 9rem;
    height : 5rem;
    border : none;
    border-radius : 1.5rem;
    margin : auto 1rem;
    background-color : #C6DC76;
    color : white;
    font-size : 2rem;
    font-weight : bold;
    cursor : pointer;
    box-shadow : 0.1rem 0.1rem 0.1rem 0.1rem #b6b6b6;
  }
`
export const todoListContainer = styled.div`
  width : 87rem;
  height : 60rem;
  background-color : rgba(198, 220, 118, 0.56);
  border-radius : 3rem;
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  align-items : center;
  margin : 1rem 0 3rem 0;
  // 아래 부분은 추후 수정할 부분
  color : white;
  font-size : 2rem;
  font-weight : bold;

`