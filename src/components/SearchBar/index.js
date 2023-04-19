import { useState } from "react";


export function SearchBar(props) {
  const [timeValue, setTimeValue] = useState([0]);
  // Filter past practices
    function handleFilter(e) {
      // console.dir(e.target.value);
      switch (e.target.id) {
        case "name":
          props.filteredFunction((prevState) => {
            // Find a way to filter already filtered practices and not all of them
            return props.allPractices.filter((currentElement) => {
              return currentElement.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
            });
          });
          break;
          case "time":
            setTimeValue(e.target.value);
            props.filteredFunction((prevState) => {
              return props.allPractices.filter((currentElement) => {
                // console.log(currentElement.time);
                return currentElement.time
                .includes(e.target.value);
              });
            });
          break;
        default:
          break;
      }
      if (e.target.value === "") {
        props.filteredFunction(props.allPractices);
        return;
      }
      }

  return (
    <>
      <div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <input
      type="search"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="name"
      placeholder="ex: Morning Vinyasa Flow"
      onChange={handleFilter}
    />
    <label for="time">{timeValue}</label>
    <input type="range" id="time" name="time"
         min="0" max="24" onChange={handleFilter}/>
  </div>
</div>
    </>
  );
}
