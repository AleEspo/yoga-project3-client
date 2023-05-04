import { useState } from "react";
import RangeSlider from "./RangeSlider.js"

export function SearchBar(props) {

  const [timeFrom, setTimeFrom] = useState([0]);
  const [timeTo, setTimeTo] = useState([24]);
  console.log(timeFrom)
  console.log(timeTo)
    // Filter past practices
    function handleFilter(e) {
      if (Array.isArray(e)) {
        // Filter by Time
        setTimeFrom(e[0]);
        setTimeTo(e[1]);
        props.filteredFunction((prevState) => {
          if(prevState.length > 0){
            // prevState instead of props.allPractices
            return prevState.filter((currentElement) => {
              // console.log(currentElement.time); => "08:48"
              const hour = parseInt(currentElement.time.split(":")[0]); // => 8
              console.log(hour);
              // if (timeFrom >= parseInt(hour) && parseInt(hour) <= timeTo){
              return (hour >= timeFrom && hour <= timeTo)
              // As a function?
              // && currentElement.name
              // .toLowerCase()
              // .includes(e.target.value.toLowerCase());
              // }
            });
          }
        });
      } else {
        // Filter by String
        props.filteredFunction((prevState) => { // setFilteredPractices
          // Find a way to filter already filtered practices and not all of them
          console.log(prevState);
          // prevState instead of props.allPractices
          if(prevState.length > 0){
            return prevState.filter((currentElement) => {
              return currentElement.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
            });
          }
        });
        if (e.target.value === "") {
          props.filteredFunction(props.allPractices);
          return;
        }
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
    <p className="text-left pt-5" >Set a timerange:</p>
    <div className="flex flex-col gap-2 p-4">
      <RangeSlider className="w-60 h-8" defaultValue={[0, 24]} min={0} max={24} onChange={handleFilter}/>
    </div>
  </div>
</div>
    </>
  );
}
