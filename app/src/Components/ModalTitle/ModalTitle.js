import React from "react";

class ModalTitle extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}

export default ModalTitle;
