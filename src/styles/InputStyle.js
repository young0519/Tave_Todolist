import styled from "styled-components";

export const LoginInput = styled.div`
  width : 25rem;
  margin : 1rem auto;

  p {
    font-size : 1.5rem;
    margin : 0 0 0.5rem 0;
  }
  
  input {
    width : 25rem;
    height : 3rem;
    border : none;
    border-radius : 0.6rem;
  }
`
export const SignUpInput = styled.div`
  width : 25rem;
  margin : 0.8rem auto;

  p {
    font-size : 1.3rem;
    font-weight : 700;
    margin : 0 0 0.5rem 0;
    &.error {
      color : red;
      font-size : 1rem;
      margin : 0.3rem 0 0 0;
      display : none;
    }
    &.error-email, &.error-pw, &.error-pwInvalid {
      display : block;
    }
  }
  
  input {
    width : 25rem;
    height : 3rem;
    border : none;
    border-radius : 0.6rem;
    padding : 0 0.5rem;
    &:focus {
      outline:none;
    }
  
  }

`