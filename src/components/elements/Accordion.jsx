import React, { useState, Children, cloneElement } from 'react';

function Accordion({ children }) {
	const [activeItem, setActiveItem] = useState(null);

	const toggleAccordion = (index) => {
		if (activeItem === index) {
			setActiveItem(null); // Close the current item if it's open
		} else {
			setActiveItem(index); // Open the clicked item
		}
	};

	return (
		<div className='accordion' id='accordionPanelsStayOpenExample'>
			{Children.map(children, (child, index) => {
				// Clone each child element with additional props
				const isOpen = activeItem === index;
				return cloneElement(child, {
					isOpen,
					onToggle: () => toggleAccordion(index),
					key: index,
				});
			})}
		</div>
	);
}

function AccordionItem({ title, isOpen, children, onToggle }) {
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header mb-0'>
				<button
					className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
					type='button'
					onClick={onToggle}
				>
					{title}
				</button>
			</h2>
			<div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
				<div className='accordion-body'>{children}</div>
			</div>
		</div>
	);
}

Accordion.Item = AccordionItem;

export default Accordion;
