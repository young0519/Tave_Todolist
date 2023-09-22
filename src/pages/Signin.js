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
      // eslint-disable-next-line default-case
      switch (error.code) {
        case 'auth/invalid-email' :
          alert('잘못된 이메일 형식입니다')
          break;
        case 'auth/missing-password' : 
          alert('비밀번호를 입력해주세요');

          break;
        case 'auth/user-not-found' : 
          alert('없는 사용자 정보입니다. 회원가입 부탁드립니다.')
          break;
        case 'auth/email-already-in-use' :
          alert('이미 가입되어 있는 계정입니다');
          break;
        default : 
          alert('로그인에 실패하였습니다');
      }
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