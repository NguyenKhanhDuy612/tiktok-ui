import React from 'react'

const MenuHeader = ({icon, title, onBack}) => {
	return (
		<div className='flex justify-center items-center relative'>
			<span onClick={onBack} className='absolute top-[2px] bottom-0 left-[35px] cursor-pointer'>{icon}</span>
			<span className='text-xl font-medium'>{title}</span>
		</div>
	)
}

export default MenuHeader
