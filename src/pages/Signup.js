import * as s from "../styles/SignStyle" 
import * as i from "../styles/InputStyle" 
import * as b from "../styles/ButtonStyle" 

const Signup = () => {

  return (
    <s.BoxContainer className="signUpContainer">
      <h1>회원 가입</h1>
      <i.SignUpInput className="inputContainer">
        <p>이름</p>
        <input type="text"/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>이메일</p>
        <input type="email"/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호</p>
        <input type="password"/>
      </i.SignUpInput>
      <i.SignUpInput className="inputContainer">
        <p>비밀번호 확인</p>
        <input type="password"/>
      </i.SignUpInput>
      <b.SignUpBtn type="button">가입하기</b.SignUpBtn>
      
    </s.BoxContainer>
  )

}

export default Signup;