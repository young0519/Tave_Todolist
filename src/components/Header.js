import * as h from "../styles/HeaderStyle"
import * as b from "../styles/ButtonStyle";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

const Header = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <h.HeaderContainer>
      <h.TextContainer>
        <h2>홍길동</h2>
        <p>님의 Todo List</p>
      </h.TextContainer>
      <b.LogoutBtn onClick={onLogOutClick}>Logout</b.LogoutBtn>
    </h.HeaderContainer>
  )
}

export default Header;