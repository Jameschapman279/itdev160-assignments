import React from 'React';   8K (gzipped:3.3K)
import './header.css';
import logo from '../logo.svg';

class header extends Component {
  render () {
    return (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Good Quotes</p>
     </header>
   );
  }
}

export default Header;
