import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {

	const [debounce, setDebounce] = useState(value)

	useEffect(()=>{
		let handler = setTimeout(()=>setDebounce(value), delay);
		return ()=>clearTimeout(handler);
	},[value])
	return (
		debounce
	)
}

export default useDebounce
