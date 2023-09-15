import { Link } from "react-router-dom";
import * as s from "../styles/SignStyle"
import * as i from "../styles/InputStyle";
import * as b from "../styles/ButtonStyle";

const Signin = () => {

  return (
    <s.BoxContainer className="signContainer">
      <h1>Todo List</h1>
      <i.LoginInput className="inputContainer">
        <p>Email</p>
        <input type="email"/>
      </i.LoginInput>
      <i.LoginInput className="inputContainer">
        <p>password</p>
        <input type="password"/>
      </i.LoginInput>
      <Link to='/signup'>회원가입</Link>
      <b.LoginBtn type="button">Login</b.LoginBtn>
      <hr></hr>
      <b.SocialLoginBtn>Google로 로그인하기</b.SocialLoginBtn>
    </s.BoxContainer>
  )

}

export default Signin;