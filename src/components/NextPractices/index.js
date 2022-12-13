export function NextPractices(props) {
  return (
    <>
      <ol className="border-l border-gray-300">
        {props.myOrders.map((currentOrder) => {
          return (
            <>
              <li>
                <div className="flex flex-start items-center pt-3">
                  <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                  <p className="text-gray-500 text-sm">{currentOrder.date} at {currentOrder.time}</p>
                </div>
                <div className="mt-0.5 ml-4 mb-6">
                  <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                  {currentOrder.name}
                  </h4>
                  <p className="text-gray-500 mb-3">
                    {currentOrder.description}
                  </p>
                </div>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
}
