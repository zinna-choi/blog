import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";
import Modal from "react-awesome-modal";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  _openModal = function() {
    this.setState({
      visible: true
    });
  };
  _closeModal = function() {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div class="header_grid">
        <div></div>
        <div className="acenter">
          <Route path="/" />
          <Link className="link_tit" to="/">
            {" "}
            <h3>Jieun's Blog!</h3>
          </Link>
        </div>
        <div className="acenter">
          <h5 onClick={() => this._openModal()}> 관리자 로그인 </h5>
          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInDown"
            onClickAway={() => this._closeModal()}
          >
            <div>
              테스트
              <input
                value="닫기"
                type="button"
                onClick={() => this._closeModal()}
              />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default header;
