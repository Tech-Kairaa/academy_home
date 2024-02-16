import React, { useState } from 'react';

const NavTabs = ({ tabs, defaultActiveTab, content, onChange }) => {
	const [activeTab, setActiveTab] = useState(defaultActiveTab);

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
		onChange(tabId);
	};

	return (
		<div>
			<ul className='nav nav-tabs justify-content-center'>
				{tabs.map((tab, index) => (
					<li className='nav-item' key={index}>
						<a
							className={`nav-link fs-6 ${
								activeTab === tab.id ? 'text-primary active' : 'text-black'
							}`}
							onClick={() => handleTabClick(tab.id)}
							href='#'
						>
							<em
								className={`bi bi-${
									activeTab === tab.id ? 'check-circle-fill' : 'circle'
								} me-2`}
							></em>
							{tab.label}
						</a>
					</li>
				))}
			</ul>

			<div className='tab-content'>
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
					>
						{content[tab.id]}
					</div>
				))}
			</div>
		</div>
	);
};

export default NavTabs;
