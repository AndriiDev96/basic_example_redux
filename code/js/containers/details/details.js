import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Details extends Component{
  render(){
    if(!this.props.car){
      return (<div>Please select any car</div>)
    }
    return(
      <div className="wrapper car-info">
        <h2>{this.props.car.name}</h2>
        <p>speed: {this.props.car.speed}</p>
        <p>weight: {this.props.car.weight}</p>
        <img className="car-picture" src={this.props.car.img}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    car: state.active
  }
}

export default connect(mapStateToProps)(Details);
