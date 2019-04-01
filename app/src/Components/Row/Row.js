import React from "react";
import styles from "./Row.module.css";
import PropTypes from "prop-types";

class Row extends React.Component {
  render() {
    return <div className={styles["row"]}>{this.props.children}</div>;
  }
}

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
