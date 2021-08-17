import React, { useState } from 'react'
import { ReactComponent as CreateViewIcon } from '../../assets/createview.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import BaseModal from '../Modal'
import CreateView from './CreateView'
import './styles.scss'

const NewView = () => {
  const [show, setShow] = useState(false);
  const triggerModal = () => {
    setShow(true);
    console.log("modalopen");
  };
  const untriggerModal = () => {
    setShow(false);
  };
  return (
    <>
    <div className="new-view">
      <CreateViewIcon />
      <p className="new-view__title">Create a View</p>
      <p className="new-view__desc">
        A view lets you see data from different angles, get started here
      </p>
      <p className="new-view__btn" onClick={triggerModal}>
        <PlusIcon />
        <span >New View</span>
      </p>

    </div>
    <BaseModal
    handleClose={untriggerModal}
    show={show}
    anchorClass="modal__anchor"
    btnlabel="Update"
    backgroundShade="modal-background"
    modalTitle="New"
  >
    <CreateView cancelModal={untriggerModal} />
  </BaseModal>
  </>
  )
}

export default NewView
