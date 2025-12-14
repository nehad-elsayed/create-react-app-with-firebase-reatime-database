import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import { ref, push, set, getDatabase } from "firebase/database";

export default function Write() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  async function saveData() {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "nature/fruits"));
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2,
    });
  }

  return (
    <>
      <div style={{ backgroundColor: "beige" }}>
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => {
            setInputValue1(e.target.value);
          }}
        />
        <input
          type="text"
          value={inputValue2}
          onChange={(e) => {
            setInputValue2(e.target.value);
          }}
        />
        <button value={saveData}>saveData</button>
      </div>
    </>
  );
}
