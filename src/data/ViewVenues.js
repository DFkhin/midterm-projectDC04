import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const ViewVenues = ()=> {
  const { id } = useParams();
  const [venue, setVenue] = useState({});

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        
  const {venue} = data;
  setVenue(venue);
})
}, []);
    return (
      <>
       <p className="text-center align-item-center">
          {venue.building}
        </p>
      <div className="overflow-x-auto"> 
      <table className="table divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Name</th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Building</th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{venue.id}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{venue.name}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{venue.building}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        </div>
  </>
  )
}

export default ViewVenues
