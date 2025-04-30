import React from 'react'
import CharacterItem from './CharacterItem' // To render character info

const CharacterGrid = ({ items, isLoading }) => { // Receive props

  return isLoading ? <h1>Loading...</h1> : // Show Loading text if isLoading is 'true' 
  
                        <section className='cards'> 
                           { 
                            /* Map through items array */
                            items.map(item => (

                                /* Render CharacterItem */
                                <CharacterItem 
                                    key={item.character.id} // Use character.id as unique key prop
                                    item={item}             // Pass current item as a prop
                                 > 
                                 </CharacterItem>
                           )) 
                           }   

                        </section>
}

export default CharacterGrid