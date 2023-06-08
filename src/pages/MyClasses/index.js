import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function MyOrders() {
  const [orders, setOrders] = useState();
  // const [practice, setPractice] = useState([]); -> DELETE ?
  const [teacherPractice, setTeacherPractice] = useState([]);

  const navigate = useNavigate();

  const { loggedInUser } = useContext(AuthContext);

  // USER'S ORDERS
  // setOrder doesn't fetch orders in time to render the div
  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/order/my-orders");

        setOrders(response.data);
        // filterActiveOrders()
      } catch (err) {
        console.log(err);
      }
    }
    fetchOrders();
  }, []);

  // filter active orders only
  const filterActiveOrders =
    orders &&
    orders.filter(function (currentOrder) {
      return !currentOrder.status.includes("Cancelled");
    });

  // TEACHER'S PRACTICES
  useEffect(() => {
    async function fetchTeacherPractices() {
      try {
        const response = await api.get("/practice/teacher-practices");
        setTeacherPractice(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTeacherPractices();
  }, []);

  // cancel practice for teachers
  async function cancelClass(practiceId) {
    try {
      const response = await api.delete(`/practice/${practiceId}`);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  // cancel booking for students
  async function cancelBooking(practiceId) {
    try {
      const response = await api.patch(`/order/update-status/${practiceId}`);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container my-24 px-6 mx-auto" id="latest-classes">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800 text-center md:text-left">
          <div>
            {loggedInUser.user.role === "TEACHER" ? (
              teacherPractice ? (
                <>
                  {" "}
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    My practices
                  </h2>
                  <Link to="/practice/create">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Create new class
                    </button>
                  </Link>
                  <h4 className="font-semibold text-xl text-center mb-12">
                    Hello {loggedInUser.user.name}, here you can find your next
                    practices coming up!
                  </h4>
                  {teacherPractice.map((currentPractice) => {
                    return (
                      <div className="flex flex-wrap mb-6">
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                          <div
                            className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={currentPractice.img}
                              className="w-full"
                              alt="Louvre"
                            />
                            <a href="#!">
                              <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>

                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                          <h5 className="text-lg font-bold mb-3">
                            {currentPractice.name} {currentPractice._id}
                          </h5>
                          <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 496 512"
                            >
                              <path
                                fill="currentColor"
                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                              />
                            </svg>
                            {currentPractice.tag}
                          </div>
                          <p className="text-gray-500 mb-6">
                            <small>
                              Published <u>{currentPractice.createdAt}</u> by
                              <a href="#!" className="text-gray-900">
                                {currentPractice.teacher.name}
                              </a>
                            </small>
                          </p>
                          <p className="text-gray-500">
                            {currentPractice.description}
                          </p>
                          <button
                            onClick={() => {
                              cancelClass(currentPractice._id);
                            }}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Cancel class
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <h5>
                  You haven't created any class yet. Click on create practice to
                  create your first one!
                </h5>
              )
            ) : (
              <></>
            )}
          </div>
          <div>
            {filterActiveOrders ? (
              <>
                <h2 className="text-3xl font-bold mb-8 text-center">
                  My orders
                </h2>
                <h4 className="font-semibold text-xl text-center mb-12">
                  Hello {loggedInUser.user.name}, here you can find your next
                  orders coming up!
                </h4>
                {filterActiveOrders.map((currentPractice) => {
                  return (
                    <>

                      <div
                        className="flex flex-wrap mb-6"
                        key={currentPractice._id}
                      >
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                          <div
                            className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={currentPractice.practice.img}
                              className="w-full"
                              alt="Louvre"
                            />
                            <a href="#!">
                              <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>

                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                          <h5 className="text-lg font-bold mb-3">
                            {currentPractice.practice.name}
                          </h5>
                          <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 496 512"
                            >
                              <path
                                fill="currentColor"
                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                              />
                            </svg>
                            {currentPractice.tag}
                          </div>
                          <p className="text-gray-500 mb-6">
                            <small>
                              Published <u>{currentPractice.createdAt}</u> by
                              <a href="#!" className="text-gray-900">
                                {currentPractice.teacher.name}
                              </a>
                            </small>
                          </p>
                          <p className="text-gray-500">
                            {currentPractice.description}
                          </p>
                          <button
                            onClick={() => {
                              cancelBooking(currentPractice._id);
                            }}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Cancel booking
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <h5>
                You haven't booked any class yet. Go to practice to book your
                first one!
              </h5>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
