import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import VenuesPage from '../pages/VenuesPage';
import Courses from '../pages/Courses';
import Settings from '../pages/Settings';
import SignOutPage from '../pages/SignOutPage';
import ViewVenues from '../data/ViewVenues';
import Schedules from '../data/Schedules';

const AllSidebarPages = () => {
  return (
    <React.Fragment>
    <section>
        <Routes>
           <Route path="/" exact element={<Dashboard />} />
           <Route path="/venues" element={<VenuesPage />} />
           <Route path="/venues/:id" element={<Schedules />} />
           <Route path="/venue/:id" element={<ViewVenues />} />
           <Route path="/courses" element={<Courses />} />
           <Route path="/settings" element={<Settings />} />
           <Route path="/sign-out" element={<SignOutPage />} />
        </Routes>
      
    </section>
  </React.Fragment>
  )
}

export default AllSidebarPages