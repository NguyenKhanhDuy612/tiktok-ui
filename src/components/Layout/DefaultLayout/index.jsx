import React from 'react'
import Header from '../components/Header/Header'
import SideBar from './SideBar/SideBar'
import Footer from '../components/Footer/Footer'

const DefaultLayout = ({children}) => {
  return (
	<>
		<Header />
		<div className='main'>
			<SideBar/>
			<div className='content'>{children}</div>
		</div>
		<Footer />
	</>
  )
}

export default DefaultLayout
