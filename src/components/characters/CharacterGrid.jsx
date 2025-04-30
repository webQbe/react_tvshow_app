import React from 'react'

const CharacterGrid = ({ items, isLoading }) => { // Receive props

  return isLoading ? <h1>Loading...</h1> : // Show Loading text if isLoading is 'true' 
  
                        <section className='cards'> 
                           { 
                            /* Map through items array & show name of each character */
                            items.map(item => (
                                <h1>{ item.character.name }</h1>
                           )) 
                           }   

                        </section>
}

export default CharacterGrid