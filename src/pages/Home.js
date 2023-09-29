import { useEffect, useState } from "react";
import Header from "../components/Header";
import { auth } from "../firebase";
import * as m from "../styles/MainStyle"
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";


const Home = () => {
  const [userName, setUserName] = useState(" ");
  
  // 프로필 정보 불러오는 Firebase Method
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // var uid = user.uid;
          const name = user.displayName;
          setUserName(name);
        }
      });
      return () => unsubscribe();
    }, []);
  
  return (
    <m.MainContainer>
      <Header userName={userName} />
      <TodoInput />   {/* Todo 입력하는 컴포넌트 */}
      <hr></hr>
      <TodoList />    {/* Todo 보여주는 컴포넌트 */}
    </m.MainContainer>
  )
}

export default Home;