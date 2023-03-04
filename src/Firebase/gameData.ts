import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "./firebase-config";

const locationRef = collection(db, "location");
const leaderBoardRef = collection(db, "leaderboard");

async function checkLocation(name: string, x: number, y: number) {
  const data = await getDocs(locationRef);
  const character = data.docs
    .map((doc) => ({
      ...doc.data(),
    }))
    .filter((c) => c.name === name)[0];

  if (Math.abs(character.x - x) < 3 && Math.abs(character.y - y) < 3)
    return true;
  return false;
}

async function addUser(name: string, totalTime: number) {
  await addDoc(leaderBoardRef, { name, totalTime });
}

export { checkLocation, addUser };
