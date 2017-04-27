import React, { Component } from 'react';

/**
 * 富文本编辑器的内容是动态的 HTML 内容
 */

class Demo04 extends Component {
    constructor() {
        super()
        this.state = {
            content: "<h1 style='font-size: 12px; color:red;'>React.js 小书</h1>",
            color:"red"
        }
    }

    handleColor (e){
        this.setState({
            content:"<h1 style='font-size: 12px; color:" + e.target.value + ";'>React.js 小书</h1>",
            color : e.target.value
        })
    }

    render () {
        return (
            <div>
                <div
                    className='editor-wrapper'
                    dangerouslySetInnerHTML={{__html: this.state.content}} />
                <div className='comment-field'>
                    <span className='comment-field-name'>颜色：</span>
                <div className='comment-field-input'>
                    <input  value={this.state.color}
                            onChange={this.handleColor.bind(this)}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Demo04;