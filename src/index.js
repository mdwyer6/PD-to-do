import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
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
      value: this.state[attr],
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
      items: _.concat(this.state.items, this.state.current)
    })
  }

  render() { 
    return require('./index_view.jsx').apply(this); 
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
