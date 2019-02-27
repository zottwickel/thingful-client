import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ArticleStarRating } from '../ArticleStarRating/ArticleStarRating'
import './ArticleListItem.css'

export default class ArticleListItem extends Component {
  render() {
    const { article } = this.props

    return (
      <Link to={`/article/${article.id}`} className='ArticleListItem'>
        <div className='ArticleListItem__image' style={{backgroundImage: `url(${article.image})`}} />

        <div className='ArticleListItem__details'>
          <div className='ArticleListItem__text'>
            <h2 className='ArticleListItem__heading'>{article.title}</h2>
            <p className='ArticleListItem__description'>{truncate(article.content)}</p>
          </div>

          <ArticleStarRating rating={ 5 } />
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
