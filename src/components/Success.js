import React from "react";
import PropTypes from "prop-types";

const Success = ({ children, closeModal, modalState, title }) => {
    if(!modalState) {
      return null;
    }
    
    return(
      <div className="modal is-active">
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-card">
        <button className="delete" onClick={closeModal} />
          <section className="modal-card-body">
            <div className="content">
              {children}
            </div>
          </section>
        </div>
      </div>
    );
  }

  Success.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
  }

  export default Success;