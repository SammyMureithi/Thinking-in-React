import React from 'react'

function SearchBar({search,handleChange}) {
  return (
      <div>
          <input type="text" placeholder='Search....' value={search} onChange={ handleChange} style={{float:"right",margin:"2rem",width:"10vw",height:"1.83rem"}}/>
    </div>
  )
}

export default SearchBar