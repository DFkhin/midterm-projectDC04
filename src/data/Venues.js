import { BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../index.css";


import dataFetching from "../components/dataFetching";

const GetData = () => {
  const navigate = useNavigate();
  const { data} = dataFetching(
    "https://sis.materdeicollege.com/api/venues"
  );

  const goSingleVenue = (venue) => {
    navigate(`/venues/${venue}`);
  };

  return (
    <>
      
        <div className="flex flex-col">
            <div className="overflow-x-auto">
              <hr />
                <div className="flex justify-between py-3 pl-2">
                    <div className="flex items-center space-x-2">
                      <h1>All Venues</h1>
                    </div>
                </div>
                <div className="p-1.5  inline-block align-middle">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="max-w-full divide-gray-200">
                      <thead className="bg-cyan-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Name</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Building</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Capacity</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {Object.keys(data)?.map((venue, index) => {
                          return (
                          <tr key={index} className="hover-effect">
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {data[venue].id}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {data[venue].name}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {data[venue].building}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {data[venue].capacity}
                              </td>
                              <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap"><BsEyeFill className="go-to" onClick={() => {
                                  goSingleVenue(data[venue].id);
                                  }}
                                />
                              </td>
                              
                          </tr>
                          );
                        })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
     );
};

export default GetData;
