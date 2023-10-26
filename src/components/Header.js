import * as h from "../styles/HeaderStyle"
import * as b from "../styles/ButtonStyle";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { useState } from "react";

const Header = (props) => {
  const navigate = useNavigate();

  const today = new Date();

  const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;
  
  const onLogOutClick = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <h.HeaderContainer>
      <h.TextContainer>
        <h2>{props.userName}</h2>
        <p>님의 {formattedDate} Todo List</p>
      </h.TextContainer>
      <b.LogoutBtn onClick={onLogOutClick}>Logout</b.LogoutBtn>
    </h.HeaderContainer>
  )
}

export default Header;