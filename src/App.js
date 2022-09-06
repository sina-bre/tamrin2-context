import { createContext, useEffect, useState } from "react";
import Card from "./Components/Card";
export const dataContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const setNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const setAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setData((prevData) => {
      return [...prevData, { name: enteredName, age: enteredAge }];
    });
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <dataContext.Provider value={[data, setData]}>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={setNameHandler} />
          <input type="number" onChange={setAgeHandler} />
          <input type="submit" />
        </form>
        <Card />
      </div>
    </dataContext.Provider>
  );
}

export default App;
