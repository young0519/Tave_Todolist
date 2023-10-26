import { useEffect, useState } from "react";
import Header from "../components/Header";
import { auth, db } from "../firebase";
import * as m from "../styles/MainStyle"
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import { useNavigate } from "react-router";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { setDocuments } from "../redux/action";
import { useDispatch } from "react-redux";


const Home = () => {
  const [userName, setUserName] = useState(" ");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
// 데이터 불러오는 함수
const fetchData = () => {
  const userCollection = collection(db, userId);
  getDocs(userCollection)
    .then((querySnapshot) => {
      const documentsData = querySnapshot.docs.map((doc) => doc.data());
      dispatch(setDocuments(documentsData));
    })
    .catch((error) => {
      console.error("Error fetching documents: ", error);
    });
};


  // 프로필 정보 불러오는 Firebase Method
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          const name = user.displayName;
          setUserName(name);

          // userId 업데이트
          setUserId(uid);

        }
        else if (!user) {
          alert('비정상적인 접근입니다. 로그인해주세요');
          navigate('/');
        }
      });
      return () => unsubscribe();
    }, []);

  
  // 데이터 불러오기
  useEffect(() => {
    if (userId) {
      fetchData();
      const userCollection = collection(db, userId);
      const unsubscribeSnapshot = onSnapshot(userCollection, (snapshot) => {
        const documentsData = snapshot.docs.map((doc) => doc.data());
        dispatch(setDocuments(documentsData));
      });

      return () => {
        unsubscribeSnapshot();
      };
    }
  }, [userId]);

  
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