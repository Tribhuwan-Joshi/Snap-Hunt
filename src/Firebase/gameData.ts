import { addDoc, doc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

const locationRef = collection(db, "location");
interface characterPos {
  name: string;
  xRange: [number, number];
  yRange: [number, number];
}

const charactersLoc: Array<characterPos> = [
  {
    name: "spike",
    xRange: [342, 247],
    yRange: [500, 512],
  },
  {
    name: "stewie",
    xRange: [142, 147],
    yRange: [200, 212],
  },
  {
    name: "tom",
    xRange: [542, 547],
    yRange: [800, 812],
  },
];

(async () => {
  try {
    await Promise.all(
      charactersLoc.map((c: characterPos) => addDoc(locationRef, c))
    );
    console.log("Data added");
  } catch (err: unknown) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unkown error occur");
  }
})();
