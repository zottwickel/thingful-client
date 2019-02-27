import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ThingStarRating(rating) {
  return <span className='ThingStarRating'>
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'far', 'star' ] } />
  </span>
}
