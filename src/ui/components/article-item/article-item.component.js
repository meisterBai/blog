import {Link} from 'react-router-dom'
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class ArticleItem extends PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        history: PropTypes.object,
    }

    render() {
        const {history, id, title, theme, tag, created_at, abstract, views} = this.props

        return (
            <div className="article-item wow zoomIn animated" onClick={()=>{history.push(`/article-detail/${id}`)}}>
                <div className="article-body">
                    <Link to={`/article-detail/${id}`}><h4>{title}</h4></Link>
                    <p>
                        <span>post @ {created_at}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>category: {theme}</span>
						&nbsp;&nbsp;&nbsp;
                        <span>浏览：{views}</span>
                    </p>
                    <div className="article-abstract">
                        {abstract} ...
                    </div>
                    <span className="article-link"><Link to={`/article-detail/${id}`}>阅读全文 >></Link></span>
                </div>
            </div>
        )
    }
}