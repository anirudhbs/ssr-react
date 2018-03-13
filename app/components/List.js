import React from 'react'

function List (props) {
  const { pokemon, location } = props
  const { ability } = location.match.params
  return (
    <div>
      <h2>{ability}</h2>
      <ul>
        {
          pokemon.map(cur => {
            const { pokemon } = cur
            return <li key={pokemon.name}>{pokemon.name}</li>
          })
        }
      </ul>
    </div>
  )
}
export default List
