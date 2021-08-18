import React from 'react';
import {Input} from './Search.css'

export default class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({value});
    
  }

  render(){
    return (
      <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." />
  )
};
};


