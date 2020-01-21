import React, {PureComponent} from 'react'
import ArticleItem from '../article-item'

export default class ArticleList extends PureComponent {
    render() {
        return(
            <div>
                {
                    this.props.data.map((item,index)=>(
                        <ArticleItem></ArticleItem>
                    ))
                }
            </div>
        )
    }
}