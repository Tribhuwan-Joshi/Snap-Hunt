import { setDoc, getDoc, getDocs, doc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

const locationRef = collection(db, "location");
interface characterPos {
  name: string;
  x: number;
  y: number;
}

const charactersLoc: Array<characterPos> = [
  {
    name: "spike",
    x: 59.7,
    y: 77.1,
  },
  {
    name: "stewie",
    x: 93.55,
    y: 76.63,
  },
  {
    name: "tom",
    x: 84.1,
    y: 94.5,
  },
];

(async () => {
  try {
    await Promise.all(
      charactersLoc.map(async (c: characterPos) => {
        const characterDocRef = doc(locationRef, c.name); // create a new document on collection reference locationRef with id c.name
        const characterDoc = await getDoc(characterDocRef); // get its data using getDoc with reference
        if (!characterDoc.exists()) {
          await setDoc(characterDocRef, c);
          return;
        }
        // setDoc on document reference created using doc
      })
    );
  } catch (err: unknown) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unknown error occurred");
  }
})();

async function checkLocation(name: string, x: number, y: number) {
  const data = await getDocs(locationRef);
  const character = data.docs
    .map((doc) => ({
      ...doc.data(),
    }))
    .filter((c) => c.name === name)[0];

  if (Math.abs(character.x - x) < 10 && Math.abs(character.y - y) < 10)
    console.log("You found", name);
  else console.log(name, "is  not there");
}

export { checkLocation };
