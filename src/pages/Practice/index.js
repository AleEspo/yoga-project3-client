import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";

export function Practice() {
  const [practice, setPractice] = useState([]);
  const [filteredPractices, setFilteredPractices] = useState([]);

  useEffect(() => {
    setFilteredPractices(practice);
}, [practice]);


  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPractices() {
      try {
        const response = await api.get("/practice");
        setPractice(response.data);
      } catch (err) {
        console.log(err);
        // aqui pode colocar TOAST
      }
    }
    fetchPractices();
  }, []);

  // button for ADMIN + TEACHER on my order
  async function handleDelete(practiceId) {
    try {
      await api.delete(`/practice/${practiceId}`);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleCreateOrder(practiceId, practicePrice) {
    try {
      const response = await api.post("/order", {
        price: practicePrice,
        practice: practiceId,
      });

      console.log(response.data);

      navigate("/order/my-orders");
    } catch (err) {
      console.log(err);
    }
  }

  // attualizar estado x atualizar places left (ou fazer navigate pra orders?)
  // criar condicional {currentPractice.placesLeft !== 0} ? => book; : Join waiting list
  return (
    <>
      <>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
              Choose your practice
            </h2>
            <SearchBar
          filteredFunction={setFilteredPractices}
          allPractices={practice}
          className="mb-40"
        />
            <div className="my-24 grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            {filteredPractices.map((currentPractice) => {return (
              <div className="mb-6 lg:mb-6" key={currentPractice._id}>
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                    {currentPractice.img ? <img
                        src={currentPractice.img}
                        className="w-full"
                        alt="#"
                      /> : <img
                        src="https://unsplash.com/photos/F2qh3yjz6Jk"
                        className="w-full"
                        alt="#"
                      />}
                    
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{bg: "rgba(251, 251, 251, 0.15)"}}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">{currentPractice.name}</h5>
                    <p className="text-gray-500 mb-4">
                      <small>
                        Published <u>{currentPractice.createdAt}</u> by
                        <a href="#!" className="text-gray-900">
                          {currentPractice.teacher}
                        </a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2">
                      {currentPractice.description}
                    </p>
                    {loggedInUser ? (
                      <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => {
                  handleCreateOrder(currentPractice._id, currentPractice.price);
                }}
                >
                      {currentPractice.placesLeft === 0 ? "No places left" : "Book"}
                    </a>
            ) : (
              <Link to="/login">
              <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Log In</a>
              </Link>
            )}
            {/* {loggedInUser.role==="ADMIN" ?  (
                      <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => {
                  handleCreateOrder(currentPractice._id, currentPractice.price);
                }}
                >
                      {currentPractice.placesLeft === 0 ? "No places left" : "Book"}
                    </a>
            ) : "" } */}
                  </div>
                </div>
              </div>
              )})}
            </div>
          </section>
        </div>
      </>
      {/* <h1>Practice</h1>
      {practice.map((currentPractice) => {
        return (
          <div key={currentPractice._id}>
            <h2>{currentPractice.name}</h2>
            <p>{currentPractice.price}</p>
            <img src={currentPractice.img} alt="test" />
            {loggedInUser ? (
              <button
                onClick={() => {
                  handleCreateOrder(currentPractice._id, currentPractice.price);
                }}
                disabled={currentPractice.placesLeft === 0 ? true : false}
              >
                Book
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}

            {loggedInUser.user.role === "TEACHER" && (
              <button
                onClick={() => {
                  handleDelete(currentPractice._id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        );
      })} */}
    </>
  );
}
