import React from 'react'
import Venues from '../data/Venues'
const  VenuesPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="w-full h-screen centered text-4xl">
        <Venues />
      </div>
    </section>
  </React.Fragment>
  )
}

export default VenuesPage