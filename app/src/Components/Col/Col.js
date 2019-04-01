import React from "react";
import styles from "./Col.module.css";
import PropTypes from "prop-types";

class Col extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1
    };
  }

  componentDidMount() {
    if (this.props.size) {
      this.setState({
        size: this.props.size
      });
    }
  }

  render() {
    const { size } = this.state;

    const count = 100 / 12;
    const style = {
      width: `${Math.round(size * count)}%`
    };

    return (
      <div className={styles["col"]} style={style}>
        {this.props.children}
      </div>
    );
  }
}

Col.propTypes = {
  size: PropTypes.number
};

export default Col;
