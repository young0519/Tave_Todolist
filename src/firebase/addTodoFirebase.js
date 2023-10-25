import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const addTodoToFirebase = async (db, uid, todoId, todo, isDone=false) => {
    try {
        // 사용자 uid의 collection에서 todoId의 문서 생성
        const userRef = await setDoc(doc(db, uid, todoId), {
            uid: uid,       // 사용자 uid
            todoId: todoId, // Todo uid
            todo: todo,     // Todo 문구
            isDone: isDone  // Todo 완료 여부
        });
    } catch (error) {
        console.error("Error adding todo: ", error);
    }
};

export default addTodoToFirebase;
