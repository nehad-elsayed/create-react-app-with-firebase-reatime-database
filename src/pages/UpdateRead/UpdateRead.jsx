import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Read() {
  const [fruitsMenu, setFruitsMenu] = useState([]);
  const navigate=useNavigate();
  async function displayData() {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const tempArray=Object.keys(snapshot.val()).map((myFireId)=>{
        return {
          fruitId: myFireId,
          ...snapshot.val()[myFireId],
        };
      });
      setFruitsMenu(tempArray);
    } else {
      alert("There is an error");
    }
  }
  async function deleteData(fruitId) {
    const db = getDatabase(app);
    const dbRef = ref(db, `nature/fruits/${fruitId}`);
    await remove(dbRef);
    toast.success("deleted successfully");
    displayData();
  }

  return (
    <>
      <h1>Update Or Delete Data</h1>
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
          <>  <li style={{marginBlock:"10px"}} key={index}>
              <span>{item.fruitName}</span> :<span>{item.fruitDefinition}</span>: <span>{item.fruitId}</span>
              <button style={{backgroundColor:"yellow",color:"black",padding:"5px",marginInline:"5px",borderRadius:"7px",cursor:"pointer"}} onClick={()=>navigate(`/updatewrite/${item.fruitId}`)}>Update</button>  <button style={{backgroundColor:"red",color:"white",padding:"5px",marginLeft:"10px",borderRadius:"7px",cursor:"pointer"}} onClick={()=>deleteData(item.fruitId)} >Delete</button>  </li>
              
           </>
          );
        })}
      </ul>
    </>
  );
}
