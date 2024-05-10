import React, { useState } from 'react'
import { forwardRef } from 'react'
import images from '../../assets/images';

const Image = ({src, fallback: setImage = images.noImg, ...props}, ref) => {
	const [fallback, setFallback] =useState('')
	const handleImage = ()=>{
		setFallback(setImage)
	}
	return (
		<img ref={ref} {...props} src={ src} onError={handleImage}   />
	)
}

export default forwardRef(Image)
