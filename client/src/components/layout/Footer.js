import React from 'react'

export default function Footer() {
	return (
		<footer className="bg-dark text-white mt-5 p-4 text-center"
		ref={(el) => {
      if (el) {
        el.style.setProperty('margin-top', '200px', 'important');
     		 }
    	}}
		>
		  Copyright &copy; { new Date().getFullYear() } Our College Developers Team.
		</footer>
	)
}

//  style={{position: "absolute", left: "0", right: "0", bottom: "0"}}