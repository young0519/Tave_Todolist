import styled from "styled-components";

export const BoxContainer = styled.div`
  width : 40rem;
  height : 50rem;
  background : #FFECA9;
  border-radius : 4rem;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;

  h1 {
    margin : 3rem 0;
    font-size : 3rem;
  }

  a {
    font-size : 1.3rem;
    font-weight : bold;
    margin : 0.5rem 0;
  }
  hr {
    width : 30rem;
    border : 0;
    border-top: 1px dotted #C09600;
    margin : 0 0 1rem 0;
  }
`