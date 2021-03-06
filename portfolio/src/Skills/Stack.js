import React, {Component} from "react";
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'

class Stack extends Component {

  state = {
    display: 'front-end'
  }

  handleClick(e){
    const display = this.state.display === 'front-end' ? 'back-end' : 'front-end'
    this.setState({display})
  }

  render(){
    return(
      <>
      <div className='stack-header'> 
        <h2>Skills</h2>
      <button className='stack-header-button' onClick={e => this.handleClick(e)}>&#8250;</button>
      </div>
        <section className="stack-section wide-screen">
          <FrontEnd />
          <BackEnd />     
        </section>
        <section className="stack-section mobile">
          {this.state.display === 'front-end' ? <FrontEnd /> : <BackEnd />}  
        </section>    
      </>
    )
  }
} 

export default Stack;
