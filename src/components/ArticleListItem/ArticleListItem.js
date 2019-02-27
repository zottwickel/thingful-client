import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NiceDate, Hyph } from '../Utils/Utils'
import StyleIcon from '../StyleIcon/StyleIcon'
import './ArticleListItem.css'

export default class ArticleListItem extends Component {
  render() {
    const { article } = this.props
    return (
      <Link to={`/article/${article.id}`} className='ArticleListItem'>
        <div className='ArticleListItem__image' style={{backgroundImage: 'url(http://placehold.it/500x500)'}} />

        <div className='ArticleListItem__details'>
          <h2 className='ArticleListItem__heading'>{article.title}</h2>
          <p className='ArticleListItem__description'>Description</p>
          <ArticleStarRating rating={ 5 } />
        </div>
      </Link>
    )
  }
}

function ArticleStarRating(rating) {
  return <div className='ArticleStarRating'>
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'fas', 'star' ] } />
    <FontAwesomeIcon className='blue' icon={ [ 'far', 'star' ] } />
  </div>
}
