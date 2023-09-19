import * as s from "../styles/SignStyle" 
import * as i from "../styles/InputStyle" 
import * as b from "../styles/ButtonStyle" 
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
      );
      navigate('/login');   // 회원가입 성공 시 로그인 화면으로 이동
      
      // console.log(user);
    } catch (error) {
      console.log(error.message);
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
            setRegisterEmail(e.target.value);
        }}/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호</p>
        <input 
          type="password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
        }}/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호 확인</p>
        <input type="password" />
      </i.SignUpInput>
      <b.SignUpBtn type="button" onClick={register}>가입하기</b.SignUpBtn>
      
    </s.BoxContainer>
  )

}

export default Signup;