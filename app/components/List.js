import React from 'react'

class List extends React.Component {
  render () {
  const { pokemon, location } = this.props
  const { ability } = this.props.location.match.params
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
}

export default List
