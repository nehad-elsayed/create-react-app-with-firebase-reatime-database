import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import { ref, push, set, getDatabase } from "firebase/database";

export default function Write() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  async function saveData() {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "nature/fruits"));
    if (inputValue1 != "" && inputValue2 != "") {
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
    } else {
      alert("fill the inputs first");
    }
  }

  return (
    <>
      <div
        style={{
          width: "25%",
          margin: "auto",
          marginBlock: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "5pc",
          borderRadius: "10px",
          alignItems: "space-between",
          backgroundColor: "beige",
          boxShadow: "2px 2px 15px  gray",
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
        <button
          style={{
            color: "white",
            padding: "5px",
            backgroundColor: "black",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "7px",
          }}
          onClick={saveData}
        >
          saveData
        </button>
      </div>
    </>
  );
}
