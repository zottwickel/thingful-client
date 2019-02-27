import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ThingStarRating } from '../ThingStarRating/ThingStarRating'
import './ThingListItem.css'

export default class ThingListItem extends Component {
  render() {
    const { thing } = this.props
    console.log(thing)

    return (
      <Link to={`/thing/${thing.id}`} className='ThingListItem'>
        <div className='ThingListItem__image' style={{backgroundImage: `url(${thing.image})`}} />

        <div className='ThingListItem__details'>
          <div className='ThingListItem__text'>
            <h2 className='ThingListItem__heading'>{thing.title}</h2>
            <p className='ThingListItem__description'>{truncate(thing.content)}</p>
          </div>

          <ThingStarRating rating={thing.average_review_rating} />
        </div>
      </Link>
    )
  }
}

function truncate(text) {
  const words = text.split(' ')

  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + ' ...'
  }

  return text
}
