import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ArticleStarRating(rating) {
  return <div className='ArticleStarRating'>
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'far', 'star' ] } />
  </div>
}
