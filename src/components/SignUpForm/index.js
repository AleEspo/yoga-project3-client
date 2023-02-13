import { useState } from 'react';
import Icon from "react-icons-kit";
import { basic_eye } from 'react-icons-kit/linea/basic_eye';
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed';
import { basic_exclamation } from 'react-icons-kit/linea/basic_exclamation';
import { arrows_circle_check } from 'react-icons-kit/linea/arrows_circle_check';



// Add password and email validation
export function SignUpForm(props) {
  const [type, setType] = useState("password");
  // validations states
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [firstPassword, setFirstPassword] = useState("");
  const [confirmationMatch, setConfirmationMatch] = useState(false);
  const [buttonConditions, setButtonConditions] = useState(false);

  const checkConditions = () => {
    lowerValidated && upperValidated && numberValidated && specialValidated && lengthValidated && confirmationMatch ? setButtonConditions(true) : setButtonConditions(false)
  }

  const checkConfirmation = (e) => {
    firstPassword == e ? setConfirmationMatch(true) : setConfirmationMatch(false)
  }

  const handleValue = (value) => {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})')
    if (lower.test(value)) {
      setLowerValidated(true);
    }
    else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    }
    else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    }
    else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    }
    else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    }
    else {
      setLengthValidated(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              You already have an account?{" "}
              <a
                href={props.loginLink}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log In
              </a>
            </p>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0"></div>
              </div>
              <div className="mt-5 md:col-span-1 md:mt-0">
                <form action="#" method="POST" onSubmit={props.handleSubmit}>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={props.handleChange}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={props.handleChange}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700"
                          >
                            I'm a...
                          </label>
                          <select
                            id="role"
                            name="role"
                            autoComplete="role"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={props.handleChange}
                          >
                            <option value="USER">Student</option>
                            <option value="TEACHER">Teacher</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <div className='relative'>
                            {/* absolute spans above an input are included in the input field */}
                            {type === "password" ? (
                              <span className='cursor-pointer absolute my-1 right-3' onClick={() => setType("text")}>
                                <Icon icon={basic_eye_closed} size={18} />
                              </span>
                            ) : (
                              <span className='cursor-pointer absolute my-1 right-3' onClick={() => setType("password")}>
                                <Icon icon={basic_eye} size={18} />
                              </span>
                            )}
                            <input
                              type={type}
                              name="password"
                              id="password"
                              // pattern={
                              //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
                              // }
                              // Convert both values to a state and compare them throuhg the name
                              // value={secondPassword}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm custom-input"
                              onChange={(e) => {
                                // TODO : set as a function
                                setFirstPassword(e.target.value);
                                // validation box
                                handleValue(e.target.value);

                                checkConditions(e);
                                // send data to server
                                props.handleChange(e);
                              }}
                            />
                          </div>

                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Confirm Password
                          </label>
                          <div className='relative'>
                            {/* absolute spans above an input are included in the input field */}
                            {type === "password" ? (
                              <span className='cursor-pointer absolute my-1 right-3' onClick={() => setType("text")}>
                                <Icon icon={basic_eye_closed} size={18} />
                              </span>
                            ) : (
                              <span className='cursor-pointer absolute my-1 right-3' onClick={() => setType("password")}>
                                <Icon icon={basic_eye} size={18} />
                              </span>
                            )}
                            <input
                              type={type}
                              name="password"
                              id="password"
                              // pattern={
                              //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
                              // }
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm custom-input"
                              onChange={(e) => {
                                checkConfirmation(e.target.value);
                              }}
                            />
                          </div>

                          {/* validation tracker */}
                          <div className='bg-indigo-600 text-sm text-white tracking-widest p-4 rounded-md mt-3'>
                            <div className={lowerValidated ? "text-white/25 my-1" : "text-white my-1"}>
                              {lowerValidated ? (
                                <span className='mr-2 text-green-400'>
                                  <Icon icon={arrows_circle_check} />
                                </span>
                              ) : (
                                <span className='mr-2'>
                                  <Icon icon={basic_exclamation} />
                                </span>
                              )}
                              At least one lowercase letter
                            </div>
                            <div className={upperValidated ? "text-white/25 my-1" : "text-white my-1"}>
                              {upperValidated ? (
                                <span className='mr-2 text-green-400'>
                                  <Icon icon={arrows_circle_check} />
                                </span>
                              ) : (
                                <span className='mr-2'>
                                  <Icon icon={basic_exclamation} />
                                </span>
                              )}
                              At least one uppercase letter
                            </div>
                            <div className={numberValidated ? "text-white/25 my-1" : "text-white my-1"}>
                              {numberValidated ? (
                                <span className='mr-2 text-green-400'>
                                  <Icon icon={arrows_circle_check} />
                                </span>
                              ) : (
                                <span className='mr-2'>
                                  <Icon icon={basic_exclamation} />
                                </span>
                              )}
                              At least one number
                            </div>
                            <div className={specialValidated ? "text-white/25 my-1" : "text-white my-1"}>
                              {specialValidated ? (
                                <span className='mr-2 text-green-400'>
                                  <Icon icon={arrows_circle_check} />
                                </span>
                              ) : (
                                <span className='mr-2'>
                                  <Icon icon={basic_exclamation} />
                                </span>
                              )}
                              At least one special character
                            </div>
                            <div className={lengthValidated ? "text-white/25 my-1" : "text-white my-1"}>
                              {lengthValidated ? (
                                <span className='mr-2 text-green-400'>
                                  <Icon icon={arrows_circle_check} />
                                </span>
                              ) : (
                                <span className='mr-2'>
                                  <Icon icon={basic_exclamation} />
                                </span>
                              )}
                              At least 8 characters
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                      <button
                        type="submit"
                        className={`inline-flex justify-center rounded-md border border-transparent ${buttonConditions ? "bg-indigo-600" : "bg-gray-400"} py-2 px-4 text-sm font-medium text-white shadow-sm ${buttonConditions ? "hover:bg-indigo-700" : "bg-gray-400"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                        // TODO: props.buttonCondition
                        disabled={`${buttonConditions}`}
                      >
                        Create account!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
