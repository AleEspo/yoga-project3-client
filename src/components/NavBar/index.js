import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const { setLoggedInUser, loggedInUser  } = useContext(AuthContext);

  const location = window.location.pathname;

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUserData(response.data);
      } catch (err) {
        console.log(err);

        //se o token for expirado, vamos cancelalo
        if (err.response.status === 401) {
          if (location !== "/forgot-password")
          localStorage.removeItem("loggedInUser");
          // PROBLEM WITH FORGOT PASSWORD PAGE
          // navigate("/");
        }
      }
    }

    fetchUser();
  }, []);



  const user = {
    name: userData.name,
    email: userData.email,
    imageUrl: userData.img,
    role: userData.role,
    token: userData.token ? userData.token : "",
  };

  const navigation = [
    // UX DESIGN test update
    { name: "Home", href: "/", current: true, hide: false },
    { name: "Practice", href: "/practice", current: false, hide: false },
    // { name: "Profile", href: "/profile", current: false, hide: !loggedInUser },
    // {
    //   name: "My Classes",
    //   href: "/order/my-orders",
    //   current: false,
    //   hide: !loggedInUser,
    // },

    {
      name: "Our Teachers",
      href: "/our-teachers",
      current: false,
      hide: false,
    },
    // {
    //   name: "Create class",
    //   href: "/practice/create",
    //   current: false,
    //   // try with conditional ? => return hide property
    //   hide: (loggedInUser !== null && loggedInUser.user.role === "TEACHER") ? false : true,
    // },

  ];

  // console.log(navigation[5]);

  // useEffect(() => {
  //   navigation[5].hide = user.role === "TEACHER" ? false : true;
  // }, []);

  // console.log(loggedInUser.user.role);

  useEffect(() => {
    // for (let i = 0; i<navigation.length; i++){
    //   if (navigation[i].href===location){
    //     navigation[i].current = true
    //   } else {
    //     navigation[i].current = false
    //   }
    // }

    navigation.map((currentLocation) => {
      if (currentLocation.href === location) {
        return currentLocation.current === true;
      } else {
        return currentLocation.current === false;
      }
    });
  }, [location]);

  // console.log(location);
  // console.log(navigation);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
    // toast('You are now logged out', {
    //   icon: '❗️',
    // });
  }

  // REALOAD NAVBAR WHEN setLoggedInUser CHANGES?

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.hide === true
                                ? "hidden"
                                : // : item.current
                                  // ? "bg-gray-900 text-white"
                                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            // aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {loggedInUser ? (
                        <>
                          {/* <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                              <Menu.Item key="Settings">
                                  {({ active }) => (
                                    <Link to="/profile">
                                      <div
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        Profile
                                      </div>
                                    </Link>
                                  )}
                                </Menu.Item>

                                {/* <Menu.Item key="Settings">
                                  {({ active }) => (
                                    <Link to="/profile">
                                      <div
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        Profile
                                      </div>
                                    </Link>
                                  )}
                                </Menu.Item> */}

                                <Menu.Item key="Settings">
                                  {({ active }) => (
                                    <Link to="/order/my-orders">
                                      <div
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        My classes
                                      </div>
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item key="Log Out">
                                  {({ active }) => (
                                    <div
                                      onClick={handleLogOut}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Log Out
                                    </div>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
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

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>

                    {/* <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                  <div className="mt-3 space-y-1 px-2">

                    <Disclosure.Button
                      key="Profile"
                      href="/profile"
                      as="a"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Profile
                    </Disclosure.Button>

                    <Disclosure.Button
                      key="My classes"
                      href="/order/my-orders"
                      as="a"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      My classes
                    </Disclosure.Button>

                    <Disclosure.Button
                      onClick={handleLogOut}
                      key="Log Out"
                      as="a"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Log Out
                    </Disclosure.Button>

                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header> */}
        {/* <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>

          </div>
        </main> */}
      </div>
    </>
  );
}
