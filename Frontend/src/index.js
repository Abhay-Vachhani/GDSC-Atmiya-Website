import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const handleContextMenu = (e) => {
	e.preventDefault();
	alert('Right click is not allowed')
};

window.addEventListener('contextmenu', handleContextMenu);

const handleKeyDown = (e) => {
	if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
		e.preventDefault();
		alert('Developer tools are not allowed')
	}
};

window.addEventListener('keydown', handleKeyDown);


const handleWindowResize = () => {

	let isInspectOpen = false

	if ((window.outerHeight - window.innerHeight) > 180) {
		isInspectOpen = true
	}
	if ((window.outerWidth - window.innerWidth) > 180) {
		isInspectOpen = true
	}

	console.log("%cNice to see you here. \n%cCan you tell me how you got here? I mean what did you do so that the inspect window opens? \n%cYou can tell me into the contact section.", "background: #90EE90; color: black; font-size: x-large", "background: #89CFF0; color: black; font-size: x-large", "background: #C3908F; color: black; font-size: x-large");
	isInspectOpen === false
		&&
		root.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);

	isInspectOpen === true
		&&
		root.render(
			<>
				<h1 align="center" className='text-4xl'>
					Hello,
					<br />
					Please close the Developer ( Inspect ) window.
					<br />
					And
					<br />
					Refresh the website
				</h1>
			</>
		)
}

window.addEventListener('resize', handleWindowResize);
handleWindowResize()