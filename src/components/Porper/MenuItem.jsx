import React, { useState } from 'react'
import Button from '../Button/Button'

const MenuItem = ({item, onClick}) => {
	
	return (
		<Button textMenu lefticon={item?.icon} to={item?.to} onClick={onClick}>
			<span>{item?.title}</span>
		</Button>
	)
}

export default MenuItem
