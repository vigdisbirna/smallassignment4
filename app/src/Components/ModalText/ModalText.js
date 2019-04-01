import React from "react";

class ModalText extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default ModalText;
