import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import {AiOutlineArrowLeft}  from "react-icons/ai";

const Venue = () => {
  const { id } = useParams();
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setSchedule(data.schedules);
      })
  }, []);
  return (
    <>
    <div className="container">
     <div className="flex flex-col"> 
        <div className="flexjustify-between py-3 pl-2">
        <Link to="/venues" className="btn btn-md btn-info">
            <AiOutlineArrowLeft />
            Back
        </Link>
          <div className="flex ml-4 items-center space-x-2">
            <p  className={schedule? "text-center  " : " text-center "  }>
                {schedule ? "Schedules" : "No Schedule Found"}
              </p>
              
              </div>
            </div>
              <div className="p-1.5  inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  {schedule && (
                    <table className="table divide-gray-200">
                      <thead className="bg-cyan-100">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
                          <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Course No.</th>
                          <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Description</th>
                          <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Schedule</th>
                          <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Size</th>
                          <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Teacher</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {Object.keys(schedule)?.map((sched, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {schedule[sched].id}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {schedule[sched].course_no}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {schedule[sched].description}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {schedule[sched].schedule}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {schedule[sched].size}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {schedule[sched].teacher}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
          </div>
        </div>
        </div>
        </div>
  </>   
  );
};

export default Venue;
