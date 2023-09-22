import * as s from "../styles/SignStyle" 
import * as i from "../styles/InputStyle" 
import * as b from "../styles/ButtonStyle" 
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const errorEmail = document.querySelector(".email");
  const erroremail = "error-email";
  const errorPw = document.querySelector(".password");
  const errorpw = "error-pw";

  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [validPw, setValidPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isSame = Password === validPw;

  const register = async () => {
    try {
      setErrorMessage("  ");
      const user = await createUserWithEmailAndPassword(
          auth,
          Email,
          Password,
          name
      );
      console.log(user);
      alert('회원가입이 완료되었습니다');
      navigate('/login');   // 회원가입 성공 시 로그인 화면으로 이동
      

    } catch (error) {
      console.log(error.message);
      // eslint-disable-next-line default-case
      switch (error.code) {
        case 'auth/weak-password' :
          setErrorMessage('비밀번호 6자 이상 입력해주세요')
          errorPw.classList.add(errorpw);
          errorEmail.classList.remove(erroremail);
          break;
        case 'auth/invalid-email' : 
          setErrorMessage('이메일 형식이 올바르지 않습니다');
          errorEmail.classList.add(erroremail);
          errorPw.classList.remove(errorpw);
          break;
        case 'auth/email-already-in-use' :
          alert('이미 가입되어 있는 계정입니다');
          break;
      }
    }
  };

  return (
    <s.BoxContainer className="signUpContainer">
      <h1>회원 가입</h1>
      <i.SignUpInput className="inputContainer">
        <p>이름</p>
        <input type="text"/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>이메일</p>
        <input 
          type="email" 
          onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <p className="email error">{errorMessage}</p>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호</p>
        <input 
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
        }}/>
        <p className="password error">{errorMessage}</p>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호 확인</p>
        <input type="password" onChange={(e) => {
            setValidPw(e.target.value);
        }}/>
        {validPw !== '' && !isSame && (
        <p className="error error-pwInvalid">비밀번호가 일치하지 않습니다.</p>
        )}
      </i.SignUpInput>
      <b.SignUpBtn type="button" onClick={register}>가입하기</b.SignUpBtn>
      
    </s.BoxContainer>
  )

}

export default Signup;