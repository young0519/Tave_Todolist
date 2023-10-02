import styled from "styled-components";

export const TodoListContainer = styled.div`
  width : 38rem;
  height : 60rem;
  border-radius : 3rem;
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  align-items : center;
  margin : 1rem 0 3rem 0;

`

export const TodoItemContainer = styled.div`
  width : 37rem;
  height : 3.5rem;
  border-radius : 1rem;
  display : flex;
  align-items : center;
  margin : 0.1rem 0 0.5rem 0;
  background : #deebb2;

  .icon {
    color : #596b1a;
    font-size : 2rem;
    width : 3rem;
  }

  p {
    width : 24rem;
    text-align : left;
    font-size : 1.2rem;  
    margin-left : 1rem;
    font-weight : 700;
    color : #596b1a;
  }

  input {
    width : 24rem;
    height : 2rem;
    background-color : rgba(198, 220, 118, 0.8);
    border-radius : 0.4rem;
    font-size : 1.2rem;
    border : none;
    padding : 0 0 0 1rem;
    &:focus {
      outline : 0.15rem solid white;
      border-radius : 0.4rem;
    }
  }
`

export const TodoBtnContainer = styled.div`
  width : 10rem;
  height : 3.5rem;
  display : flex;
  align-items : center;
  justify-content : center;
  
  .todoBtn {
    color : #596b1a;
    font-size : 2rem;
    width : 3rem;
    cursor : pointer;
    &:nth-of-type(3) {
      font-size : 3rem;
    }
  }
  .editBtn {
    color : #596b1a;
    font-size : 2rem;
    width : 3rem;
    cursor : pointer;
    &:nth-of-type(2) {
      font-size : 3rem;
    }
  }
  `