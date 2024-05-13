import axios from 'axios'
import React from 'react'

const request = axios.create({
	baseURL: 'https://tiktok.fullstack.edu.vn/api'
})

export const getPath = async(path, options = {}) =>{
	const response = await request.get(path, options);
	return response.data
}

export default request
