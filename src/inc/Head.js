import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";
import Modal from "react-awesome-modal";

class Head extends Component {
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
            height="350"
            effect="fadeInDown"
            onClickAway={() => this._closeModal()}
          >
            <div>
              <h4 className="acenter login_tit">관리자로그인</h4>
              <form>
                <div className="login_div">
                  <div className="login_input_div">
                    <p> 관리자 ID </p>
                    <input type="text" name="id" />
                  </div>
                  <div
                    className="login_input_div"
                    style={{ marginTop: "40px" }}
                  >
                    <p>관리자 password</p>
                    <input type="password" name="password" />
                  </div>
                  <div className="submit_div">
                    <div>
                      <input type="button" value="로그인" />
                    </div>
                    <div>
                      <input
                        type="button"
                        value="취소"
                        onClick={() => this._closeModal()}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Head;
