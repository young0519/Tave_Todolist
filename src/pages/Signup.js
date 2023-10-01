import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

import * as s from "../styles/SignStyle" 
import * as i from "../styles/InputStyle" 
import * as b from "../styles/ButtonStyle" 

const Signup = () => {

  const navigate = useNavigate(); // Link 태그 대신 사용할 변수
  
  // 회원가입 시 받을 정보
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVefify] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error 발생 시, Input 하단에 띠울 문구 

  const handleEmailError = (message) => {
    setEmailError(true);
    setPasswordError(false);
    setErrorMessage(message);
  };

  const handlePasswordError = (message) => {
    setEmailError(false);
    setPasswordError(true);
    setErrorMessage(message);
  };

  const isSame = password === passwordVerify;  // 비밀번호 일치 여부

  const register = async () => {  // async를 통해 비동기 처리 해줌
    setErrorMessage("  ");  // Error 발생 시 들어갈 문구 초기화
    try {   // 예외가 발생할 수 있는 코드
      const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      );
      await updateProfile(auth.currentUser, { displayName: name });
      console.log(user);
      alert('회원가입이 완료되었습니다');
      navigate('/');   // 회원가입 성공 시 로그인 화면으로 이동

    } catch (error) { // Error 발생 시 대응 코드
      // console.log(error.message);
      switch (error.code) {
        // 이메일 및 비밀번호 오류 발생 시에만 나타날 문구 작업을 위해 classList 이용
        case 'auth/weak-password' :
          handlePasswordError('비밀번호 6자 이상 입력해주세요');
          break;
        case  'auth/invalid-email' : 
          handleEmailError('이메일 형식이 올바르지 않습니다');
          break;
        case  'auth/email-already-in-use' :
          alert('이미 가입되어 있는 계정입니다');
          break;
        case isSame == false :
          alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
        default :
          break;  
      }
    }
  };

  return (
    <s.BoxContainer className="signUpContainer">
      <h1>회원 가입</h1>
      <i.SignUpInput className="inputContainer">
        <p>이름</p>
        <input 
          type="text" 
          onChange={(e) => {
            setName(e.target.value);
        }}/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>이메일</p>
        <input 
          type="email" 
          onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <p className={`error ${emailError ? 'error-email' : ''}`}>{errorMessage}</p>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호</p>
        <input 
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
        }}/>
        <p className={`error ${passwordError ? 'error-pw' : ''}`}>{errorMessage}</p>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호 확인</p>
        <input type="password" onChange={(e) => {
            setPasswordVefify(e.target.value);
        }}/>
        {passwordVerify !== '' && !isSame && (
        <p className="error error-pwInvalid">비밀번호가 일치하지 않습니다.</p>
        )}
      </i.SignUpInput>
      <b.SignUpBtn type="button" onClick={register}>가입하기</b.SignUpBtn>
      
    </s.BoxContainer>
  )

}

export default Signup;