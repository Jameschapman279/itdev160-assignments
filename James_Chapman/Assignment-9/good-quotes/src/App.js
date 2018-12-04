import React, { Component } from 'react';   8K (gzipped:3.3K)
import logo from './logo.svg';
import './App.css';
import Header './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Good Quotes</p>
          </header>
          <main>
          <section>
          <blockquote>Here is my new quote</blockquote>
          <span className="author">James Chapman</span>
          </section>
          </main>
      </div>
    );
  }
}

export default App;
