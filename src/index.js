import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      current: '',
      items: []
    }
  }

  linkState(newVal) {
    return {
      value: this.state.current,
      requestChange: (newVal) => {
        this.setState({
          current: newVal
        });
      }
    }
  }

  handleClick(e) {
    this.setState({
      current: '',
      items: this.state.items.concat(this.state.current)
    })
  }

  render() { 
    return require('./index_view.jsx').apply(this); 
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
