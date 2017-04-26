import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Title extends Component {
    onClick (e) {
        console.log(this);
        alert("点击这个!");
    }

    render () {
        return (
            <h1 onClick={this.onClick.bind(this)}>React 小书</h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main content</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

class App extends Component {
  render() {
      const word = 'this is My gtqin test';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <a>W3School</a>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.{word+ "字数有:"+word.length}
            <Index />
        </p>
      </div>
    );
  }
}

export default App;
