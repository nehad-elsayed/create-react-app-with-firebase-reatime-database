import { useState, useEffect } from "react";
import app from "../../firebase/firebaseConfig";
import { ref, set, getDatabase, get } from "firebase/database";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateWrite() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const navigate = useNavigate();
  const { fruitId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, `nature/fruits/${fruitId}`);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setInputValue1(snapshot.val().fruitName);
        setInputValue2(snapshot.val().fruitDefinition);
      }
    };
    fetchData();
  }, [fruitId]);

  async function overwriteData() {
    const db = getDatabase(app);
    const newDocRef = ref(db, `nature/fruits/${fruitId}`);
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2,
    });
    toast.success("updated successfully");
    navigate("/read");
  }

  return (
    <>
      <h1>Update Data</h1>
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
            color: "black",
            padding: "5px",
            backgroundColor: "yellow",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "7px",
          }}
          onClick={overwriteData}
        >
          UpdateData
        </button>
      </div>
    </>
  );
}
