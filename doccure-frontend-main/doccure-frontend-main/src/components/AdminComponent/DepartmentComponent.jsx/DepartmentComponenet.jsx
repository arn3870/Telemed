import React, { useEffect, useState } from "react";
import FieldsetComponent from "../FieldsetComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddDepartmentmodal from "./AddDepartmentmodal";
import { getDepartment } from "../../../Api/services/AdminReq";
import DeleteModal from "./DeleteModal";

function DepartmentComponenet() {
  const [department, setDepartment] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getdep();
  }, [refresh]);
  console.log(department, "this i sthe department");
  const getdep = async () => {
    await getDepartment(token)
      .then((data) => setDepartment(data.data.departments))
      .catch((err) => console.log(err));
  };

  const { token } = useSelector((state) => state.adminLogin);
  return (
    <div>
      <FieldsetComponent title="Department" />
      <div className="flex justify-end mt-4 mr-5">
        <AddDepartmentmodal setRefresh={setRefresh} />
      </div>
      <div className="">
        <div className="min-w-screen flex items-center justify-center bg-gray font-sans overflow-hidden">
          <div className="w-full lg:w-6/6 mx-4">
            <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">no</th>
                    <th className="py-3 px-6 text-center">Department</th>
                    <th className="py-3 px-6 text-center">Delete</th>
                  </tr>
                </thead>

                {department &&
                  department.map((val, i) => {
                    return (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-center whitespace-nowrap">
                            <div className=" text-center">
                              <span className="font-medium ">{i + 1}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center flex items-center justify-center">
                            <div className="flex items-center ">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={val.image}
                                  alt="profile"
                                />
                              </div>
                              <span className="font-medium text-center">
                                {val.department}
                              </span>
                            </div>
                          </td>

                          <td className="py-3 px-6  text-center">
                            <div className="flex items-center justify-center font-medium">
                              <DeleteModal
                                id={val._id}
                                setRefresh={setRefresh}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentComponenet;
