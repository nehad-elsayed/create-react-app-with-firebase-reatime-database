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
    })
      .then(() => {
        alert("saved successfully");
      })
      .catch((error) => {
        alert("failed and error is", error);
      });
  }

  return (
    <>
      <div
        style={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "5pc",
          borderRadius: "10px",
          alignItems: "space-between",
          backgroundColor: "beige",
        }}
      >
        <input
          type="text"
          style={{ padding: "10px" }}
          value={inputValue1}
          onChange={(e) => {
            setInputValue1(e.target.value);
          }}
        />
        <input
          type="text"
          style={{ padding: "10px" }}
          value={inputValue2}
          onChange={(e) => {
            setInputValue2(e.target.value);
          }}
        />
        <button style={{ padding: "10px" }} onClick={saveData}>
          saveData
        </button>
      </div>
    </>
  );
}
