import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h2>Pesquisar:</h2>
        <input 
            type='text' 
            value={search} 
            placeholder="Digite para pesquisar..." 
            onChange={(e) => setSearch(e.target.value)}>
        </input>
    </div>
  )
}

export default Search