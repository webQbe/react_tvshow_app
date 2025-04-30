import React from 'react'

const CharacterItem = ({ item }) => { // Receive item as prop

    // Render character info
  return <div>{ item.character.name }</div>

}

export default CharacterItem