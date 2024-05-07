import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({to, href, children,  Comp = 'button', passProps, onClick, outline = false, text = false, disable= false, size = 'md', lefticon, righticon}) => {
	let font;

	//
	const props = {
		onClick,
		lefticon,
		righticon,
		...passProps
	};

	// link
	if(to){
		Comp = Link;
		props.to = to;
	}

	if(href){
		props.href = href;
		Comp ='a'
	}

	// size
	if(size == 'lg'){
		font = 'text-2xl'
	}else if (size == 'sm') {
		font = 'text-sm'
	}else{
		font = 'text-xl'
	}

	// remove click
	if(disable){
		delete props.onClick;
	}

	return (
		<Comp {...props} className={` space-x-1 inline-block  font-medium rounded-md ${outline ? 'border border-red-400 py-[6px] px-[10px] text-blue-400' :'py-2 px-3'} ${text || outline ? '': 'bg-blue-200'} ${text ? 'hover:underline': ''}  ${font} ${disable ? 'pointer-events-none':''}` } >
			{lefticon && <span>{lefticon}</span>}
			<span>{children}</span>
			{righticon && <span>{righticon}</span>}
		</Comp>
	)
}

export default Button
