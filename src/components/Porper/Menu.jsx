import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Menu = ({children, items, onChange}) => {

	const [history, setHistory] = useState([{data: items}]);

	const current = history[history.length - 1];

	const renderItems = ()=>{
		return(
			current?.data?.map((item, index)=>{
				const isParent = !!item.children;

				return(
					<li key={index} >
						<MenuItem item={item} 
							onClick={()=>{
								if(isParent){
									setHistory(prev =>{
										return([...prev, item.children])
									})
								}else(
									onChange(item)
								)
							}}
						/>
					</li>
				)
			})
		)
	}

	return (
		<>
			<Tippy
				interactive
				delay= {[100, 200]}
				placement='bottom-end'
				onHide={()=>(setHistory(history.slice(0,1)))}
				hideOnClick={false}
				render={attrs => (
				<div className="min-w-[250px] bg-white border py-6 rounded-md shadow-lg shadow-indigo-500/50" tabIndex="-1" {...attrs}>
					<ul className="space-y-2">
						{history.length > 1 && <MenuHeader icon={<FontAwesomeIcon icon={faAngleLeft}  />} title = 'Language' onBack={()=>(
							setHistory(history.slice(0,-1))
						)} />}
						{renderItems()}
					</ul>
				</div>
				)}
			>
				{children}
			</Tippy>
		</>
	)
}

export default Menu
