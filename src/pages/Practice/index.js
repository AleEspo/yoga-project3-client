import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

export function Practice() {
  const [practice, setPractice] = useState([]);

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

  // criar condicional {currentPractice.placesLeft !== 0} ? => book; : Join waiting list
  return (
    <>
      <>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
              Latest articles
            </h2>

            <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
              <div className="mb-6 lg:mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp"
                        className="w-full"
                        alt="#"
                      />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{bg: "rgba(251, 251, 251, 0.15)"}}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">My paradise</h5>
                    <p className="text-gray-500 mb-4">
                      <small>
                        Published <u>13.01.2022</u> by
                        <a href="#!" className="text-gray-900">
                          Anna Maria Doe
                        </a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2">
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                    <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
                        className="w-full"
                        alt="#"
                      />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{bgcolor: "rgba(251, 251, 251, 0.15)"}}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">Travel to Italy</h5>
                    <p className="text-gray-500 mb-4">
                      <small>
                        Published <u>12.01.2022</u> by
                        <a href="#!" className="text-gray-900">
                          Halley Frank
                        </a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2">
                      Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                      diam orci, nec ornare metus semper sed. Integer volutpat
                      ornare erat sit amet rutrum.
                    </p>
                    <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp"
                        className="w-full"
                        alt="#!"
                      />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{bgcolor: "rgba(251, 251, 251, 0.15)"}}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">Chasing the sun</h5>
                    <p className="text-gray-500 mb-4">
                      <small>
                        Published <u>10.01.2022</u> by
                        <a href="#!" className="text-gray-900">
                          Joe Svan
                        </a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2">
                      Curabitur tristique, mi a mollis sagittis, metus felis
                      mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                      risus eget massa volutpat feugiat. Donec.
                    </p>
                    <a
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
      <h1>Practice</h1>
      {practice.map((currentPractice) => {
        return (
          <div key={currentPractice._id}>
            <h2>{currentPractice.name}</h2>
            <p>{currentPractice.price}</p>
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
      })}
    </>
  );
}
