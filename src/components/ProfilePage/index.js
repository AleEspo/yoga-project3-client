import { Link } from "react-router-dom";

export function ProfilePage(props) {
  const features = [
    { name: "E-mail", description: `${props.email}` },
    {
      name: "Classes",
      description: `${props.practices}`,
    },
    { name: "County", description: `${props.country}` },
    { name: "Role", description: `${props.role}` },
    { name: "Age", description: `${props.age}` },
    {
      name: "Students", //folllwing/followers? Students/teachers?
      description: `${props.students}`,
    },
  ];

  return (
    <div className="bg-white">
      <div>
        <div
          className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("${props.coverPhoto}")`,
            height: "400px",
          }}
        >
          <img
            src={props.img}
            className="mx-32 rounded-full mt-56 w-32 z-10 shadow-lg"
            alt="Avatar"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.name}
          </h2>

          {/* TO IMPLEMENT conditional user logged in vs viewer */}
          <Link to="/profile/settings">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Edit profile
            </button>
          </Link>

          <p className="mt-4 text-gray-500">{props.about}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={props.photo1}
            alt="Yoga pic 1"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={props.photo2}
            alt="Yoga pic 2"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={props.photo3}
            alt="Yoga pic 3"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={props.photo4}
            alt="Yoga pic 4"
            className="rounded-lg bg-gray-100"
          />
        </div> */}
      </div>
    </div>
  );
}
