import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Redirect} from 'react-router-dom'
import style from './style.css'
import ArticleList from "./components/articelList/ArticleList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const {tags} = this.props;
        
    }
}