import React from 'react'
import { ReactComponent as CreateViewIcon } from '../../assets/createview.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import './styles.scss'

const NewView = () => {
  return (
    <div className="new-view">
        <CreateViewIcon />
        <p className="new-view__title">
          Create a View
        </p>
        <p className="new-view__desc">
          A view lets you see data from different angles, get started here
        </p>
        <p className="new-view__btn">
            <PlusIcon />
            <span>New View</span>
        </p>
    </div>
  )
}

export default NewView;
