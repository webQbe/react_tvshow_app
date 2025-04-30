import React from 'react'

const CharacterItem = ({ item }) => { // Receive item as prop

    console.log(item) // Log item object

    // Render character info
  return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={ item.character.image.medium } alt="" />
                </div>
                <div className="card-back">
                    <h1>{ item.character.name }</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong>{' '}
                            { item.person.name }
                        </li>
                        <li>
                            <strong>Birthday:</strong>{' '}
                            { item.person.birthday }
                        </li>
                        <li>
                            <strong>Status:</strong>{' '}
                            { item.person.deathday === null ? "Alive" : "Dead" }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default CharacterItem