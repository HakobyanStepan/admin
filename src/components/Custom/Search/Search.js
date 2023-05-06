import React from 'react';
import './Search.scss';

const Search = ({ onSearchInput }) => {
	return (
		<div>
           <input className='searchProduct' type='text' placeholder='Search product...' onChange={onSearchInput}/>
		</div>
	);
};

export default Search;
