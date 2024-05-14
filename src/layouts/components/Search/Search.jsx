import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from '../../../hooks';

import AccountItem from "../../../components/AccountItem/AccountItem";
import * as searchUser from '../../../services/searchServices';


function Search() {

	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([1]);
	const [showResult, setShowResult] = useState(true)
	const [showLoading, setShowLoading] = useState(false)
	const debounce = useDebounce(searchValue, 500)
	const searchRef = useRef()


	const handleChangeInput =(e)=>{
		if (!e.startsWith(' ')) {
			setSearchValue(e);
		}
	}

	useEffect(()=>{

		if(!debounce.trim()){
			return;
		}

		const getUser = async ()=>{
				setShowLoading(true)

				const res = await searchUser.searchUser(`${encodeURIComponent(debounce)}`)
				setSearchResult(res.data);

				setShowLoading(false);
			
		}

		getUser()
	},[debounce])

	return (
		<div>
		<Tippy
			interactive
			visible={showResult && searchResult.length > 1}
			onClickOutside={()=>{
				setShowResult(false);
				setShowLoading(false);
			}}
			placement='bottom-end'
			render={(attrs) => (
				<div
				className="w-[365px] bg-white border py-6 px-5 rounded-md shadow-lg shadow-indigo-500/50"
				tabIndex="-1"
				{...attrs}
				>
				<h4 className="font-bold">Account</h4>
				<div className="space-y-2">
					{searchResult && searchResult?.map((e, index)=>(
						<AccountItem key={e?.id + "-" + index} data={e}  />
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
				onChange={e => {
					handleChangeInput(e.target.value)
					setShowLoading(true);
				}}
				onClick={()=>setShowResult(true)}
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
				

				<button className="tk-active-search" onMouseDown={(e)=>e.preventDefault()}>
				<FontAwesomeIcon
					className="text-[#d8d1d1]"
					icon={faMagnifyingGlass}
				/>
				</button>
			</div>
		</Tippy>
		</div>
	);
}

export default Search;
