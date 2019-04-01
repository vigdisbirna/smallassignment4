import React from 'react';
import PropTypes from 'prop-types';
import styles from './cartoonnetworkspinner.module.css'
import dexter from './assets/dexter.jpg'
import didi from './assets/didi.jpg'
import powerpuff from './assets/powerpuffGirls.jpeg'

class CartoonNetworkSpinner extends React.Component {
  
  timerID = 0; 

  constructor(props){
    super(props)
    this.state = {
      interval : 3, 
      count: 0,
      img : [dexter, didi, powerpuff],
      isready: false
    }
  }

  componentDidMount() {
    if(this.props.interval !== undefined) {
      this.setState({interval: this.props.interval});
    }
    this.setState({isready:true})
  }

  changePic(){
    if(this.state.count === (this.state.img.length - 1)){
      this.setState({
        count: 0
      });
    }
    else {
      this.setState({
        count: this.state.count + 1
      });
    }
    clearInterval(this.timerID);
  }

  render(){
    const {interval, isready} = this.state
    const {count, img} = this.state
    const spin = styles.spin
    if(isready) {
      const inLinestyles = {
        animation: spin + ' ' + interval + 's linear infinite',
        backgroundImage: `url(${img[count]})`
      }     
      this.timerID = setInterval(() => this.changePic(), (interval * 1000))
    return(
      <div>
        <div className={ styles["cartoonnetworkspinner"] } style={inLinestyles}></div>
      </div>
    )}
    else {
      return (<div></div>);
    }
  }
}

CartoonNetworkSpinner.propTypes = {
  interval: PropTypes.number
};

export default CartoonNetworkSpinner; 