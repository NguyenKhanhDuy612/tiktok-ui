import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useRef, useState } from "react";

import AccountItem from "../../../AccountItem/AccountItem";


function Search() {

	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([1]);
	const [showResult, setShowResult] = useState(true)
	const [showLoading, setShowLoading] = useState(false)

	const searchRef = useRef()

	useEffect(()=>{

		if(!searchValue.trim()){
			return;
		}
		setShowLoading(true);

		fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
			.then(res => res.json())
			.then(res =>{
				setSearchResult(res.data);
				setShowLoading(false);
			})
			.catch(()=>{
				setShowLoading(true)
			})
	},[searchValue])

	console.log('searchResult.length',searchResult.length);
	console.log('showLoading',showLoading);
	return (
		<Tippy
			interactive
			visible={showResult && searchResult.length > 1}
			onClickOutside={()=>setShowResult(false)}
			onShow={()=>setShowResult(true)}
			placement='bottom-end'
			render={(attrs) => (
				<div
				className="w-[365px] bg-white border py-6 px-5 rounded-md shadow-lg shadow-indigo-500/50"
				tabIndex="-1"
				{...attrs}
				>
				<h4 className="font-bold">Account</h4>
				<div className="space-y-2">
					{searchResult && searchResult.map((e, index)=>(
						<AccountItem key={e?.id || index} data={e}  />
					))}
				</div>
				</div>
			)}
			>
			<div className="flex items-center justify-between w-[356px] space-x-2 rounded-[15px] border border-[#eee] py-[5px] px-[10px] focus-within:border-[#8a8d95] relative before:absolute before:border-[#eee] before:border-r-2 before:top-[8px] before:right-[34px] before:h-[24px] before:w-2">
				<input
				ref={searchRef}
				value={searchValue}
				className="w-[275px] focus:outline-none caret-[#d8d1d1] placeholder-shown:border-gray-500 tk-active-search"
				type="text"
				placeholder="Search"
				onChange={e => setSearchValue(e.target.value)}
				/>
				{!!searchValue && !showLoading &&
				
					<button className=" absolute right-[44px] text-[#d8d1d1]" onClick={()=>{
						setSearchValue('');
						searchRef.current.focus()
					}}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				}
				{showLoading && <button className="absolute right-[44px] text-[#d8d1d1] z-10	animate-spin">
				<FontAwesomeIcon icon={faSpinner} />
				</button>}
				

				<button className="tk-active-search">
				<FontAwesomeIcon
					className="text-[#d8d1d1]"
					icon={faMagnifyingGlass}
				/>
				</button>
			</div>
		</Tippy>
	);
}

export default Search;
