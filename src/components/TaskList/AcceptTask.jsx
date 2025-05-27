import React from "react";

const AcceptTask = ({data}) => {
  console.log("user name",data)
  console.log("data title from accept task",data.description)
  return (
    <>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-base">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        <div className="flex justify-between mt-4">
            <button className="bg-green-500 py-1.5 px-1.5 text-sm rounded rounded-sm cursor-pointer">Mark as Completed</button>
            <button className="bg-red-500 py-1.5 px-1.5 text-sm rounded rounded-sm cursor-pointer">Mark as Failed</button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
