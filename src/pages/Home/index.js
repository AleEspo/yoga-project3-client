import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export function Home() {
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  const { loggedInUser, loading } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  return (
    <>
      <>
        <header>
          <nav className="z-10 navbar navbar-expand-md shadow-lg py-2 bg-white flex items-center w-full justify-between fixed top-0 right-0 left-0">
            <div className="px-6">
              <button
                className="z-20 navbar-toggler border-0 py-3 px-2 md:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentM"
                aria-controls="navbarSupportedContentM"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
              <div
                className="navbar-collapse collapse grow items-center"
                id="navbarSupportedContentM"
              >
                <ul className="navbar-nav mr-auto flex flex-col md:flex-row">
                  <li className="nav-item">
                    <a
                      className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div
            className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              zIndex: "1",
              backgroundImage:
                "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
              height: "400px",
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white">
                  <h2 className="font-semibold text-4xl mb-4">Yoga Home</h2>
                  <h4 className="font-semibold text-xl mb-6">The only tool you need for your home Yoga practice</h4>
                  <a
                    className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Start Practicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div>
          <section className="mb-40">
            <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-right w-full justify-between">
              <div className="px-6 w-full flex flex-wrap items-center justify-between">
                {/* <div className="flex items-center">
                  <button
                    className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContentY"
                    aria-controls="navbarSupportedContentY"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      className="w-5"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      ></path>
                    </svg>
                  </button>
                  <a className="navbar-brand text-blue-600" href="#!">
                    <svg
                      className="w-5 h-5 ml-2 lg:ml-0 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
                      ></path>
                    </svg>
                  </a>
                </div> */}
                {/* <div
                  className="navbar-collapse collapse grow items-center"
                  id="navbarSupportedContentY"
                >
                  <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                    <li className="nav-item">
                      <a
                        className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                        href="#!"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                        href="#!"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Team
                      </a>
                    </li>
                    <li className="nav-item mb-2 lg:mb-0">
                      <a
                        className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                        href="#!"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Projects
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="flex items-center lg:ml-auto">
                  {loggedInUser ? (
                    <>
                      <Link to="/profile">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          {" "}
                          Profile{" "}
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={handleLogOut}
                      >
                        {" "}
                        Log Out{" "}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Login
                        </button>
                      </Link>
                      <Link to="/signup">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Sign up for free
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </nav>

            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                bg: "50%",
                backgroundImage:
                  "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
                height: "500px",
              }}
            >
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                      Home Yoga
                    </h1>
                    <br />
                    <h2>The only tool you need for your home Yoga practice</h2>
                    <button
                      type="button"
                      className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Start practicing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
      {/* {loading ? (
        <h1>Loading</h1>
      ) : loggedInUser ? (
        <>
          <h1>Home</h1>

          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </button>
        </>
      ) : (
        <>
          {" "}
          <h1>Home</h1>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </>
      )} */}
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
                          style={{ bg: "rgba(251, 251, 251, 0.15)" }}
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
                          style={{ bgcolor: "rgba(251, 251, 251, 0.15)" }}
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
                          style={{ bgcolor: "rgba(251, 251, 251, 0.15)" }}
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
            <Link to="/practice">
              <button
                type="button"
                className="inline-block px-7 py-3 border-2 border-black text-black font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                See all classes
              </button>
            </Link>
          </section>
        </div>
      </>
    </>
  );
}
// return
// (
//   <>
//     {loading ? (<h1>Loading</h1>) : loggedInUser.token ? (
//         <>
//           <h1>Home</h1>
//           <button
//             onClick={() => {
//               navigate("/profile");
//             }}
//           >
//             Profile
//           </button>
//         </>
//       ) : (
//         <>
//           <h1>Home</h1>
//           <button
//             onClick={() => {
//               navigate("/signup");
//             }}
//           >
//             SignUp
//           </button>
//           <button
//             onClick={() => {
//               navigate("/login");
//             }}
//           >
//             LogIn
//           </button>
//         </>
//       )
//     </>
//     }
//   </>
// )
//}
