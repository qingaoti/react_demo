import React, { Component } from 'react';

/**
 *
 * 但是 React.js 并不能完全满足所有 DOM 操作需求，有些时候我们还是需要和 DOM 打交道。
 * 比如说你想进入页面以后自动 focus 到某个输入框，你需要调用 input.focus() 的 DOM API，
 * 比如说你想动态获取某个 DOM 元素的尺寸来做后续的动画，等等。
 */
class Demo02 extends Component {
    componentDidMount () {
        this.input.focus()
    }

    render () {
        return (
            <input ref={(input) => this.input = input} />
        )
    }
}

export default Demo02;