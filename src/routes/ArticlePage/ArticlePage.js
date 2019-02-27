import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArticleContext, { nullArticle } from '../../contexts/ArticleContext'
import ArticleApiService from '../../services/article-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import { ArticleStarRating } from '../../components/ArticleStarRating/ArticleStarRating'
import StyleIcon from '../../components/StyleIcon/StyleIcon'
import CommentForm from '../../components/CommentForm/CommentForm'
import './ArticlePage.css'

export default class ArticlePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ArticleContext

  componentDidMount() {
    const { articleId } = this.props.match.params
    this.context.clearError()
    ArticleApiService.getArticle(articleId)
      .then(this.context.setArticle)
      .catch(this.context.setError)
    ArticleApiService.getArticleComments(articleId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearArticle()
  }

  renderArticle() {
    const { article, comments } = this.context
    return <>
      <div className='ArticlePage__image' style={{backgroundImage: 'url(http://placehold.it/500x500)'}} />
      <h2>{article.title}</h2>
      <ArticleContent article={article} />
      <ArticleComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, article } = this.context
    let content
    if (error) {
      content = (error.error === `Article doesn't exist`)
        ? <p className='red'>Article not found</p>
        : <p className='red'>There was an error</p>
    } else if (!article.id) {
      content = <div className='loading' />
    } else {
      content = this.renderArticle()
    }
    return (
      <Section className='ArticlePage'>
        {content}
      </Section>
    )
  }
}

function ArticleStyle({ article }) {
  return (
    <span className='ArticlePage__style'>
      <StyleIcon style={article.style} />
      {' '}
      {article.style}
    </span>
  )
}

function ArticleAuthor({ article = nullArticle }) {
  return (
    <span className='ArticlePage__author'>
      {article.author.full_name}
    </span>
  )
}

function ArticleContent({ article }) {
  return (
    <p className='ArticlePage__content'>
      {article.content}
    </p>
  )
}

function ArticleComments({ comments = [] }) {
  return (
    <ul className='ArticlePage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='ArticlePage__comment'>
          <p className='ArticlePage__comment-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ArticlePage__comment-icon blue'
            />
            {comment.text}
          </p>
          <p className='ArticlePage__comment-user'>
            <ArticleStarRating rating={ 5 } />
            <Hyph />
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
