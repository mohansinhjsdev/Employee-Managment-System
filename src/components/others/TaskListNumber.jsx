import React from "react";

const TaskListNumber = () => {
  return (
    <>
      <div className="flex flex-wrap mt-10 justify-between gap-5">
        <div className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-9 bg-red-400">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-9 bg-blue-400">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">Completed Task</h3>
        </div>
        <div className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-9 bg-green-400">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">Acceted Task</h3>
        </div>
        <div className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-9 bg-yellow-400">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
