import { Link, useNavigate } from "react-router-dom";
import * as s from "../styles/SignStyle"
import * as i from "../styles/InputStyle";
import * as b from "../styles/ButtonStyle";
import { auth } from "../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Signin = () => {

  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userData, setUserData] = useState(null);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      // console.log(user);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }
  

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
        <input type="email" onChange={(e) => {
            setLoginEmail(e.target.value);
        }}/>
      </i.LoginInput>
      <i.LoginInput className="inputContainer">
        <p>password</p>
        <input type="password" onChange={(e) => {
            setLoginPassword(e.target.value);

        }}/>
      </i.LoginInput>
      <Link to='/signup'>회원가입</Link>
      <b.LoginBtn type="button" onClick={login}>Login</b.LoginBtn>
      <hr></hr>
      <b.SocialLoginBtn type="button" onClick={handleGoogleLogin}>Google로 로그인하기</b.SocialLoginBtn>
    </s.BoxContainer>
  )

}

export default Signin;