import * as h from "../styles/HeaderStyle"
import * as b from "../styles/ButtonStyle";

const Header = () => {

  return (
    <h.HeaderContainer>
      <h.TextContainer>
        <h2>홍길동</h2>
        <p>님의 Todo List</p>
      </h.TextContainer>
      <b.LogoutBtn>Logout</b.LogoutBtn>
    </h.HeaderContainer>
  )
}

export default Header;