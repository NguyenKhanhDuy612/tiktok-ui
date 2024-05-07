import React from 'react'
import Button from '../Button/Button'

const MenuItem = ({data}) => {
  return (
	data?.map((item, index)=>(
		<li key={index}>
			<Button text lefticon={item?.icon} to={item?.to}>
				<span>{item?.title}</span>
			</Button>
		</li>
	))
  )
}

export default MenuItem
