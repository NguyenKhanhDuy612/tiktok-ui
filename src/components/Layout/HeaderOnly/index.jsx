import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const DefaultLayout = ({children}) => {
  return (
	<>
		<Header />
		<div className='main'>
			<div className='content'>{children}</div>
		</div>
		<Footer />
	</>
  )
}

export default DefaultLayout
