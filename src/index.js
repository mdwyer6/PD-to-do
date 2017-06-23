import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      items: []
    }
  }

  linkState(attr) {
    return {
      value: this.state[newVal],
      requestChange: (attr) => {
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
