import { doc, updateDoc } from "firebase/firestore";

const updateTodoFirebase = async (db, uid, todoId, newTodo, isDone) => {
    try {
        const docRef = doc(db, uid, todoId);
        await updateDoc(docRef, {
            todo: newTodo,
            isDone: isDone
        });
    } catch (error) {
        console.error("Error updating todo: ", error);
    }
};

export default updateTodoFirebase;
