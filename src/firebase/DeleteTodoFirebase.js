import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const DeleteTodoFirebase = async (db, uid, todoId) => {
    try {
      await deleteDoc(doc(db, uid, todoId));
    } catch (error) {
        console.error("Error updating todo: ", error);
    }
};

export default DeleteTodoFirebase;
