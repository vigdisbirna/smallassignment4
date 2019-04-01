import React from 'react';
import PropTypes from 'prop-types';
import arrowRight from './assets/arrowRight.png';
import arrowLeft from './assets/arrowLeft.png';
import styles from './carousel.module.css'

   
class CarouselInline extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0 
    }
  }
  
  handleLeftClick() {
    if(this.state.counter !== 0){
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  handleRightClick() {
    if(this.state.counter !== (this.props.images.length - 1)){
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  render(){
    const {images, size} = this.props
    const {counter } = this.state 
    return(
      <div>
        <img src={arrowLeft} alt="arrow-left" onClick={(e) => this.handleLeftClick(e)} style={{width:50}}/> 
        <div className={ styles[size] } style={{ backgroundImage: `url(${images[counter]})`  }}></div>
        <img src={arrowRight} alt="arrow-right" onClick={(e) => this.handleRightClick(e)} style={{width:50}}/>
      </div>
    );
  }
}

CarouselInline.propTypes = {
  images: PropTypes.arrayOf.isRequired,
  size: PropTypes.oneOf([ 'small', 'medium', 'large']).isRequired,
};


export default CarouselInline; 