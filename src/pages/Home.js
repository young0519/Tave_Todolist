import Header from "../components/Header";
import * as m from "../styles/MainStyle"


const Home = () => {
  



  return (
    <m.MainContainer>
      <Header/>
      <m.InputContainer className="todoInput">
        <input type="text"/>
        <button>ADD</button>
      </m.InputContainer>
      <hr></hr>
      <m.todoListContainer className="todoList">
        todolist 넣을 부분입니다.
      </m.todoListContainer>
    </m.MainContainer>
  )

}

export default Home;