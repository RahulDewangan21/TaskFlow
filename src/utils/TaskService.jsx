import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const tasksCollection = collection(db, "tasks");

export const createTask = async (task) => {
  await addDoc(tasksCollection, task);
};

export const fetchTasks = async () => {
  const querySnapshot = await getDocs(tasksCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateTask = async (id, updatedTask) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, updatedTask);
};

export const deleteTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};