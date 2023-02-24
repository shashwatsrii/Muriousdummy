import React from "react";

const StudentDashboard = () => {
  return (
    <div className="flex h-[100vh] w-[100%] bg-black">
      <div className="bg-[#FFFFFF] w-64">side pannel</div>
      <div className="h-[100vh] w-full">
        <div className="bg-[#FFFFFF] h-[10vh] w-full">navbar</div>
        <div className="bg-[#F1F3F4] h-[90vh] w-full">main</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
