import React from 'react'

const Filter =(props) => {
  const {filterName, handleFilter} = props;
  return(
      <p>filter names &nbsp;
				<input type="text" 
					value={filterName} 
					onChange={handleFilter} />
			</p>
  )
}
export default Filter;