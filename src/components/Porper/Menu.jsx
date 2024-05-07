import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';

const Menu = ({children, items}) => {

	console.log('item',items);
	const renderItems = ()=>(
		<MenuItem data={items} />
	)

	return (
		<>
			<Tippy
				interactive
				delay= {[100, 200]}
				placement='bottom-end'
				render={attrs => (
				<div className="min-w-[250px] bg-white border py-6 px-5 rounded-md shadow-lg shadow-indigo-500/50" tabIndex="-1" {...attrs}>
					<ul className="space-y-2">
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
