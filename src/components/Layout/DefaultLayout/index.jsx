import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'

const DefaultLayout = () => {
  return (
	<>
		<Header />
		<div className='main'>
			<SideBar/>
		</div>
		<Footer />
	</>
  )
}

export default DefaultLayout
