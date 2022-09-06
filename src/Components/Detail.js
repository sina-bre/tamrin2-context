import { useContext, useState } from "react";
import { dataContext } from "../App";
const Detail = () => {
  const [data, setData] = useContext(dataContext);
  const [detailsEnteredName, setDetailsEnteredName] = useState("");
  const [detailsEnteredAge, setDetailsEnteredAge] = useState("");
  const onChangeName = (event) => {
    setDetailsEnteredName(event.target.value);
  };
  const onChangeAge = (event) => {
    setDetailsEnteredAge(event.target.value);
  };
  const onSubmit = (event, index) => {
    event.preventDefault();
    data.splice(index, 1, {
      name: detailsEnteredName,
      age: detailsEnteredAge,
    });
    console.log(data);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <form
            onSubmit={(event, mainIndex) => {
              mainIndex = index;
              console.log(mainIndex);
              event.preventDefault();
              setData(
                data.splice(index, 1, {
                  name: detailsEnteredName,
                  age: detailsEnteredAge,
                })
              );
              console.log(data);
            }}
          >
            <input
              type="text"
              placeholder={item.name}
              onChange={onChangeName}
            />{" "}
            is{" "}
            <input
              type="number"
              placeholder={item.age}
              onChange={onChangeAge}
            />{" "}
            years old
            <input type="submit" value={"Change"} />
          </form>
        </div>
      ))}
    </div>
  );
};
export default Detail;
