import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin : 0;
  padding : 0;
  box-sizing : border-box;

}

html {
  font-size : 62.5% // 1rem = 10px
}

body {
  font-family : 'AlmaraiRegular';
  min-width : 320px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  background : #eeeeee;
  list-style : none;
}
`;

export default GlobalStyle;