import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

export default function Read() {
  const [fruitsMenu, setFruitsMenu] = useState([]);

  async function displayData() {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setFruitsMenu(Object.values(snapshot.val()));
    } else {
      alert("There is an error");
    }
  }

  return (
    <>
      <h1>Display Fruits</h1>
      <button
        onClick={displayData}
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "7px",
        }}
      >
        click here to display
      </button>
      <ul>
        {fruitsMenu.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.fruitName}</span> :<span>{item.fruitDefinition}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
