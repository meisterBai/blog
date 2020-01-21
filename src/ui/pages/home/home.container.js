import Home from './home.component'
import { compose } from 'recompose'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {actions as frontActions} from '../../../store/reducers/frontReducers'

const mapStatToProps = state => {
    return {
        tags: state.admin.tags,
        pageNum: state.front.pageNum,
        total: state.front.total,
        articleList: state.front.articleList
    }
}

const {getArticleList, getArticleDetail} = frontActions

const mapDispatchToProps = dispatch => {
    return {
        getArticleList: bindActionCreators(getArticleList, dispatch),
        getArticleDetail: bindActionCreators(getArticleDetail, dispatch)
    }
}

export default compose(
    withRouter,
    connect(mapStatToProps,mapDispatchToProps)
)(Home)