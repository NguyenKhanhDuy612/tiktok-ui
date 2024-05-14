import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Button = ({
	to,
	href,
	children,
	Comp = "button",
	passProps,
	onClick,
	outline = false,
	text = false,
	textMenu = false,
	disable = false,
	size = "md",
	lefticon,
	righticon,
}) => {
  	let font;

	//
	const props = {
		onClick,
		lefticon,
		righticon,
		...passProps,
	};

	// link
	if (to) {
		Comp = Link;
		props.to = to;
	}

	if (href) {
		props.href = href;
		Comp = "a";
	}

	// size
	if (size == "lg") {
		font = "text-2xl";
	} else if (size == "sm") {
		font = "text-sm";
	} else {
		font = "text-xl";
	}

	// remove click
	if (disable) {
		delete props.onClick;
	}

	return (
		<Comp
		{...props}
		className={` space-x-2 inline-block  font-medium rounded-md 
			${
		outline
			? "border border-blue-400 py-[6px] px-[10px] text-blue-400"
			: "py-2 px-3"
		} 
			${text || outline ? "" : "bg-blue-200"} 
			${text ? "hover:underline" : ""} 
			${
		textMenu
			? "hover:bg-blue-200 bg-transparent px-5 text-left rounded-none w-full"
			: ""
		}  
			${font} 
			${disable ? "pointer-events-none" : ""}`}
		>
		{lefticon && <span>{lefticon}</span>}
		<span>{children}</span>
		{righticon && <span>{righticon}</span>}
		</Comp>
	);
};

Button.protoTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	children: PropTypes.node.isRequired,
	Comp: PropTypes.string,
	passProps: PropTypes.string,
	onClick: PropTypes.function,
	outline: PropTypes.bool,
	text: PropTypes.bool,
	textMenu: PropTypes.bool,
	disable: PropTypes.bool,
	size: PropTypes.string,
	lefticon: PropTypes.node,
	righticon: PropTypes.node,
}

export default Button;
