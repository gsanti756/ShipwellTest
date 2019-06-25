import React from 'react'
import Header from 'components/Header'
import FormStop from 'components/FormStop'
import TableStops from 'components/TableStops'
import PopUp from 'components/PopUp'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <FormStop />
        <TableStops />
        <PopUp />
      </div>
    </div>
  )
}

export default Home
