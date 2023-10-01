import * as h from "../styles/HeaderStyle"
import * as b from "../styles/ButtonStyle";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { useState } from "react";

const Header = (props) => {
  const navigate = useNavigate();

  
  const onLogOutClick = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <h.HeaderContainer>
      <h.TextContainer>
        <h2>{props.userName}</h2>
        <p>님의 Todo List</p>
      </h.TextContainer>
      <b.LogoutBtn onClick={onLogOutClick}>Logout</b.LogoutBtn>
    </h.HeaderContainer>
  )
}

export default Header;