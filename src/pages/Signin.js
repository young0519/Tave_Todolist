import { Link, useNavigate } from "react-router-dom";
import * as s from "../styles/SignStyle"
import * as i from "../styles/InputStyle";
import * as b from "../styles/ButtonStyle";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Signin = () => {

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); //provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에UserCredentialImpl 출력
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      <b.SocialLoginBtn type="button" onClick={handleGoogleLogin}>Google로 로그인하기</b.SocialLoginBtn>
    </s.BoxContainer>
  )

}

export default Signin;