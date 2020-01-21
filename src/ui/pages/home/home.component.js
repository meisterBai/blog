import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../../components/article-list'
import style from './style.css'
import {Pagination} from 'antd'

export default class Home extends PureComponent {
    static defaultProps = {
        userInfo: {},
        pageNum: 1,
        total:0,
        articleList:[]
    }

    static propTypes = {
        pageNum: PropTypes.number.isRequired,
        total:PropTypes.number.isRequired,
        articleList: PropTypes.array.isRequired
    }

    render() {
        const {tags} = this.props;
        localStorage.setItem('user_info',JSON.stringify(this.props.userInfo))
        return (
            <div className={style.container}>
                <ArticleList 
                    history={this.props.history}
                    data={this.props.ArticleList}
                    getArticleDetail={this.props.getArticleDetail}
                />
           
                <div className={style.paginationContainer}>
                <Pagination
                    defaultPageSize={5}
                    onChange={(pageNum)=> {
                        this.props.getArticleList(this.props.match.params.tag || '', pageNum)
                    }}
                    current={this.props.pageNum}
                    total={this.props.total}
                ></Pagination>

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getArticleList(this.props.match.params.tag || '')
    }
}