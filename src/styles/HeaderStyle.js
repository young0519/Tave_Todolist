import styled from "styled-components";

export const HeaderContainer = styled.div`
  width : 100vw;
  height : 7rem;
  background : #C6DC76;
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  `
  
  export const TextContainer = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content: flex-start;
  h2 {
    display : inline;
    margin : 0 0 0 3rem;
    font-size : 2.3rem;
    color : white;
  }
  
  p {
    display : inline;
    font-size : 2.3rem;
    color : white;
  }
  
`