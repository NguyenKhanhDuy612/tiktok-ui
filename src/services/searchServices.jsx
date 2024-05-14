import * as requestPath from "../utils/request";

export const searchUser = async (query, type = 'less')=>{
	try {
		const res = await requestPath.getPath('/users/search',{
			params:{
				q: query,
				type
			}
		})
		return res;
	} catch (error) {
		console.log('error', error);
	}
}
