import { useState } from "react";
import RangeSlider from "./RangeSlider.js";
import { useEffect } from "react";

export function MultiSearchBar(props) {
  function fetchTeachers() {
    const teachers = props.allPractices.map((practice) => {
      return practice.teacher;
    });
    return teachers;
  }
  // it repeats teachers

  // function fetchStyles() {
  //   const styles = props.allPractices.map((practice) => {
  //     return practice.tag;
  //   });
  //   console.log(styles);
  //   return styles;
  // }

  const styles = [
    "",
    "Vinyasa",
    "Hatha",
    "Ashtanga",
    "Yin",
    "Restorative",
    "Kundalini",
  ];

  // const [timeFrom, setTimeFrom] = useState([0]);
  // console.log(timeFrom);
  // const [timeTo, setTimeTo] = useState([24]);
  // console.log(timeTo);

  const [form, setForm] = useState({
    name: "",
    teacher: "",
    style: "",
    // type: [Personal, Group] ?
    // level: [], // beginner, intermediate, advanced -> need to upgrate class model in the backend
    timeFrom: 0,
    timeTo: 24,
  });
  console.log(form);

  // const [searchQuery, setSearchQuery] = useState("")

  // console.log(timeFrom);
  // console.log(timeTo);

  // function crossFilters(from, to, query) {
  //   props.filteredFunction(() => {
  //       if( props.allPractices.length > 0 ){
  //         return props.allPractices.filter((practice) => {
  //           const hour = parseInt(practice.time.split(":")[0]);
  //           console.log(hour)
  //           const name = practice.name.toLowerCase()
  //           return (hour > from && hour < to && name.includes(query))
  //         });
  //       }
  //   });
  // }

  useEffect(() => {
    console.log(form);
    props.filteredFunction(() => {
      return props.allPractices.filter((practice) => {
        const practiceHour = parseInt(practice.time.split(":")[0]);
        console.log(practiceHour);
        const practiceName = practice.name.toLowerCase();
        console.log(practiceName);
        const practiceTeacher = practice.teacher._id;
        console.log(practiceTeacher);
        const practiceStyle = practice.tag;
        console.log(practiceStyle);

        if (
          (form.name === "" || practiceName.includes(form.name)) &&
          (form.timeFrom === 0 || practiceHour > form.timeFrom) &&
          (form.timeTo === 24 || practiceHour < form.timeTo) &&
          (form.teacher === "" || practiceTeacher.includes(form.teacher)) &&
          (form.style === "" || practiceStyle.includes(form.style))
        ) {
          return true;
        }

        return false;
      });
    });
  }, [form]);

  function handleFilter(e) {
    // // return props.allPractices.filter((currentElement) => {
    // //   return currentElement.name
    // //     .toLowerCase()
    // //     .includes(form.name.toLowerCase());
    // // });
    // // });

    // // if (form.name === "") {
    // //   props.filteredFunction(props.allPractices); // not ALL pracrtices, but ...form
    // //   return;
    // // }

    if (Array.isArray(e)) {
      setForm({
        ...form,
        timeFrom: e[0],
        timeTo: e[1],
      });
    } else {
      // setSearchQuery(e.target.value);
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
    // crossFilters(timeFrom, timeTo, searchQuery);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label htmlFor="name" className="text-left">
            Search for a class:
          </label>
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
            value={form.name}
            name="name"
            placeholder="ex: Morning Vinyasa Flow"
            onChange={handleFilter}
          />

          <div className="flex flex-col gap-2 p-4">
            <label htmlFor="teacher" className="text-left">
              Select a teacher:
            </label>
            <select
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
              id="teacher"
              value={form.teacher}
              name="teacher"
              onChange={handleFilter}
            >
              {fetchTeachers().map((teacher) => {
                return <option value={teacher._id}>{teacher.name}</option>;
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <label htmlFor="style" className="text-left">
              Choose a style:
            </label>
            <select
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
              id="style"
              name="style"
              onChange={handleFilter}
            >
              {styles.map((style) => {
                return <option value={style}>{style}</option>;
              })}
            </select>
          </div>

          <p className="text-left pt-5">Set a timerange:</p>
          <div className="flex flex-col gap-2 p-4">
            <RangeSlider
              className="w-60 h-8"
              defaultValue={[0, 24]}
              min={0}
              max={24}
              onChange={handleFilter}
            />
          </div>
        </div>
      </div>
    </>
  );
}
