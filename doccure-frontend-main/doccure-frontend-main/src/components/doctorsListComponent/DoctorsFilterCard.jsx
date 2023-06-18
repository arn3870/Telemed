import React, { useEffect, useState } from "react";

import { getDepartment } from "../../Api/services/ClientReq";
import { useSelector } from "react-redux";

function DoctorsFilterCard({selected,setSelected}) {
  const { token } = useSelector((state) => state.clientLogin);
 

  const [departments, setDepartments] = useState([]);
  const getDepartments = async () => {
    await getDepartment(token)
      .then((data) => setDepartments(data.data.departments))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getDepartments();
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setSelected([
        ...selected, value
      ]);
    } else {
     setSelected(selected.filter((e) =>e !== value))
    }
  };
console.log(selected)

  return (
    <>
      <div
        href="#"
        className="block max-w-md w-72 mt-5 p-6 ml-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sticky top-0"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          select your specialist
        </h5>
        <hr />

        <div className="filter-widget">
          {departments.map((val) => {
            return (
              <div>
                <label className="inline-block text-sm font-normal cursor-pointer mx-3 my-2 ">
                  <input
                    type="checkbox"
                    className=" cursor-pointer"
                    name="select_specialist"
                    value={val.department}
                    onChange={handleChange}
                  />
                  <span className="checkmark" /> {val.department}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DoctorsFilterCard;
