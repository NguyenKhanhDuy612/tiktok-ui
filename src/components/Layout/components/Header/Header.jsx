import React, { useState } from "react";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleQuestion,
	faCircleXmark,
	faEarthAsia,
	faEllipsisVertical,
	faKeyboard,
	faMagnifyingGlass,
	faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';

import AccountItem from "../../../AccountItem/AccountItem";
import Button from "../../../Button/Button";
import Menu from "../../../Porper/Menu";

const Header = () => {
	const [searchResult, setSearchResult] = useState([]);
	const [visible, setSearchVisible] = useState(true);

	const MenuItem =[
		{
			icon: <FontAwesomeIcon icon={faEarthAsia}/>,
			title: 'Language',
			children:{
				title: 'Language',
				data: [
					{
						code: 'en',
						title: 'English'
					},
					{
						code: 'vn',
						title: 'Vietnamese'
					}
				]
			}
		},
		{
			icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
			title: 'Feedback and help',
			to: '/upload'
		},
		{
			icon: <FontAwesomeIcon icon={faKeyboard}/>,
			title: 'Keyboard'
		},
	]

	const handleChange =(menuitem)=>{
		console.log('menuitem',menuitem);
	}
	return (
		<header className="h-[60px] shadow-[0px_1px_1px_rgba(0,0,0,0.3)] flex items-center">
			<div className="container">
				<div className="flex justify-between">
					<div>
						<img className="w-[30px] h-[40px]" src={images.logo} alt="logo" />
					</div>
					<Tippy
						interactive
						render={attrs => (
						<div className="w-[365px] bg-white border py-6 px-5 rounded-md shadow-lg shadow-indigo-500/50" tabIndex="-1" {...attrs}>
							<h4 className="font-bold">Account</h4>
							<div className="space-y-2">
								<AccountItem  />
								<AccountItem  />
								<AccountItem  />
							</div>
						</div>
						)}
					>
						<div className="flex items-center justify-between w-[356px] space-x-2 rounded-[15px] border border-[#eee] py-[5px] px-[10px] focus-within:border-[#8a8d95] relative before:absolute before:border-[#eee] before:border-r-2 before:top-[8px] before:right-[34px] before:h-[24px] before:w-2">
							<input
								className="w-[300px] focus:outline-none caret-[#d8d1d1] placeholder-shown:border-gray-500 tk-active-search"
								type="text"
								placeholder="Search"
							/>
							<button className="hidden absolute right-[44px] text-[#d8d1d1]">
								<FontAwesomeIcon icon={faCircleXmark} />
							</button>
							<button className="hidden absolute right-[44px] text-[#d8d1d1]">
								<FontAwesomeIcon icon={faSpinner} />
							</button>

							<button className="tk-active-search">
								<FontAwesomeIcon
									className="text-[#d8d1d1]"
									icon={faMagnifyingGlass}
								/>
							</button>
						</div>
					</Tippy>
					<div className="space-x-2">
						{/* <Button text to={'/login'} lefticon={<FontAwesomeIcon icon={faLocationDot} />}>Sign In </Button> */}
						<Button text > Upload </Button>
						<Button outline onClick={()=>alert('Not setup')} >Sign In </Button>
						<Menu items={MenuItem} onChange={(e)=>handleChange(e)} >
							<span className="p-3 cursor-pointer"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
						</Menu>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
