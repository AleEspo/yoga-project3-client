export function SearchBar(props) {

  function handleFilter(e) {
    props.filteredFunction(() => {
      return props.allPractices.filter((currentElement) => {
        return currentElement.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
    });
    
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
            id="exampleSearch"
            placeholder="ex: Morning Vinyasa Flow"
            onChange={handleFilter}
          />
        </div>
      </div>
    </>
  );
}
