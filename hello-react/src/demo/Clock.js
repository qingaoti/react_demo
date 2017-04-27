import React, { Component } from 'react';
// import request from 'superagent';

/**
 *
  > constructor()  构造   --  **~  在初始化 state的 时候用
 -> componentWillMount()  //将挂载   **~  进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动
 -> render()  // 渲染
 // 然后构造 DOM 元素插入页面
 -> componentDidMount()  // 结束挂载  **~ 有些组件的启动工作是依赖 DOM 的，例如动画的启动
 -> componentWillUnmount() //销毁   **~ 有时候需要一些数据的清理，例如定时器的清理


 shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。
                                                这个生命周期在 React.js 性能优化上非常有用。
 componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
 componentWillUpdate()：组件开始重新渲染之前调用。
 componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。

 */



class Clock extends Component {
    constructor () {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount () {  // render 之前调用 componentWillMount
        // request.get('http://apis.baidu.com/netpopo/weather/city')
        //     .set({
        //         'apikey': '2f9bacf5da47a1a1349d50a30067568d',
        //         'Accept': 'application/json'
        //     })
        //     .end(function (err, res) {
        //         if (err) console.log(err);
        //         console.log(JSON.parse(res.text).result[0]);
        //     });

        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillUnmount () {  //销毁的时候
        clearInterval(this.timer)
    }

    render () {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock;