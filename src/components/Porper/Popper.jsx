import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Popper = ({content = 'content', children}) => {
  return (
    
    <Tippy 
      placement='bottom-end' 
      content={<span>{content}</span>}>
      <button>{children}</button>
    </Tippy>
  )
}

export default Popper
