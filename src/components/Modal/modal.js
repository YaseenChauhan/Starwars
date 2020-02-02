import React, { Fragment, Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

class StarModal extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <Modal isOpen={this.props.open}  toggle={this.props.onClose}>
          <ModalHeader toggle={() => {
            this.props.onClose()
          }}>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-7 offset-md-5 col-sm-7 offset-sm-5 col-12">
                <h1>Star Detail</h1>
                <div className="modal-text">
                  <p>Name: {this.props.item.name}</p>
                  <p>Eye Color: {this.props.item.eye_color}</p>
                  <p>Gender: {this.props.item.gender}</p>
                  <p>Birth Year{this.props.item.birth_year}</p>
                  <button id="OM-five-plus-1" onClick={() => {this.props.onClose()}}>okay</button>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

      </Fragment>
    )
  }

}
export default StarModal;





