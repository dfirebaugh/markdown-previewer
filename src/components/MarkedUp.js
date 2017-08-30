import marked from 'marked';
import React from 'react';

class MarkedUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:"Type some *markdown* here!"
    }
  }
  handleChange(e){
    this.setState({value:e.target.value});
  }
  rawMarkup(){
    var md = marked('I am using __markdown__.');
    return {__html:marked(this.state.value)};
  }
  render(){
    var {markDown}= this.props;
    var {value} = this.state;
    return (
      <div className="container">
        <textarea
          onChange={this.handleChange.bind(this)}
          className="TextBox"
          id="TextBox"
          defaultValue={ value }
          />

        <div
          className="Marked"
          dangerouslySetInnerHTML={this.rawMarkup()}
          />
      </div>
    );
  }
}

export default MarkedUp;
