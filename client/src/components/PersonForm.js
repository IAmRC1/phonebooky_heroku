import React from 'react'

const PersonForm = (props) => {
  const { addPerson, newName, newNumber, handleChangeName, handleChangeNum } = props;
  return (
    <form onSubmit={addPerson} >
				<div>
					<label>
						name:&nbsp; 
						<input type="text" 
							size="30"
							minLength="3"
							maxLength="18"
							placeholder="Between 3-18 letters"
							value={newName} 
							onChange={handleChangeName} 
							//required
						/> 
					</label> 
				</div> 
				<div>
					<label>
						number:&nbsp;
						<input type="tel" 
							size="30"
							placeholder="Must be 10 digits"
							pattern="[0-9]{10}"
							minLength="9"
							maxLength="10"
							value={newNumber} 
							onChange={handleChangeNum} 
							//required
						/> 
					</label> 
				</div>
				<button type="submit" disabled={!newName || !newNumber}>add</button> 
			</form>
  )
}

export default PersonForm