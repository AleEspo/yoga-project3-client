export function ResetPasswordForm(props) {
    return (
      <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://res.cloudinary.com/dvvtr5bi2/image/upload/v1686915979/YogaHome_logo1_i5ieja.svg"
              alt="Yoga Home Logo"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Type in your new password
              </h2>
              {/* <p className="mt-2 text-center text-sm text-gray-600">
                You already have an account?{" "}
                <a
                  href={props.loginLink}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log In
                </a>
              </p> */}
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
                              New Password
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
                              Confirm New Password
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
  
                          {/* <div className="col-span-6 sm:col-span-6">
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
                            <input
                              type="password"
                              name="password"
                              id="password"
                              // pattern={
                              //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
                              // }
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              onChange={props.handleChange}
                            />
  
                            <p className="mt-2 text-sm text-gray-500">
                              Your password must include at leas eight characters,
                              one uppercase letter, one lowercase letter, one
                              number and one special character
                            </p>
                          </div> */}
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Reset password!
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
        </div>
      </>
    );
  }
  