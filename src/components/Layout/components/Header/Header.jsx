import React, { useState } from "react";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleQuestion,
	faCloudArrowUp,
	faComment,
	faEarthAsia,
	faEllipsisVertical,
	faKeyboard,
	faUserLarge,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../Button/Button";
import Menu from "../../../Porper/Menu";
import Popper from "../../../Porper/Popper";
import Image from "../../../Image";
import Search from "../Search/Search";
import routesConfig from "../../../../config/routes";
import { Link } from "react-router-dom";

const Header = () => {
	const [visible, setSearchVisible] = useState(true);

	const userActive = true;
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
			to: routesConfig.upload
		},
		{
			icon: <FontAwesomeIcon icon={faKeyboard}/>,
			title: 'Keyboard'
		},
	]

	const actionUser =[
		{
			icon: <FontAwesomeIcon icon={faUserLarge}/>,
			title: 'Hello',
			to: routesConfig.upload
		},
		...MenuItem
	]

	const handleChange =(menuitem)=>{
		console.log('menuitem',menuitem);
	}
	return (
		<header className="h-[60px] shadow-[0px_1px_1px_rgba(0,0,0,0.3)] flex items-center">
			<div className="container">
				<div className="flex justify-between">
					<Link to={routesConfig.home}>
						<img className="w-[30px] h-[40px]" src={images.logo} alt="logo" />
					</Link>
					<Search />
					<div className="space-x-2 flex items-center">
						{userActive 
							? 
								<div className="space-x-3">
									<Popper content='Upload'>
										<FontAwesomeIcon className="cursor-pointer text-2xl" icon={faCloudArrowUp} /> 
									</Popper>
									<Popper >
										<FontAwesomeIcon className="cursor-pointer text-2xl" icon={faComment} /> 
									</Popper>
								</div>
							: 
							<>
								{/* <Button text to={'/login'} lefticon={<FontAwesomeIcon icon={faLocationDot} />}>Sign In </Button> */}
								<Button text > Upload </Button>
								<Button outline onClick={()=>alert('Not setup')} >Sign In </Button>
							</>
						}
						
						
						<Menu items={userActive ? actionUser : MenuItem} onChange={(e)=>handleChange(e)} >
							{userActive
								?
									<Image className="w-[36px] h-[36px] rounded-full overflow-hidden cursor-pointer" src={images.logo} alt="logo" fallback='https://upload.wikimedia.org/wikipedia/vi/thumb/4/47/Logo_TP._Nha_Trang.svg/447px-Logo_TP._Nha_Trang.svg.png?20231006084559' />
								:
									<span className="p-3 cursor-pointer"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
							}
						</Menu>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
