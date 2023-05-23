import { useState } from "react";
import RangeSlider from "./RangeSlider.js"

export function MultiSearchBar(props) {

  const [timeFrom, setTimeFrom] = useState([0]);
  const [timeTo, setTimeTo] = useState([24]);
  const [searchQuery, setSearchQuery] = useState("")

  console.log(timeFrom);
  // console.log(timeTo);

  function crossFilters(from, to, query) {
    props.filteredFunction(() => {
        if( props.allPractices.length > 0 ){
          return props.allPractices.filter((practice) => {
            const hour = parseInt(practice.time.split(":")[0]);
            console.log(hour)
            const name = practice.name.toLowerCase()
            return (hour > from && hour < to && name.includes(query))
          });
        }
    });
  }

  function handleFilter(e) {
    if (Array.isArray(e)) {
      setTimeFrom(e[0]);
      setTimeTo(e[1]);
    } else {
      setSearchQuery(e.target.value);
    }
    crossFilters(timeFrom, timeTo, searchQuery);
  }


  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <input type="search"
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
