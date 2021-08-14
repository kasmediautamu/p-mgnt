import React from 'react'
import { ReactComponent as CreateViewIcon } from '../../assets/createview.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import SubMenu from '../header/Top/Sub'
import Tooltip from '../Popper/P'
import './styles.scss'

const NewView = () => {
  return (
    <div className="new-view">
      <CreateViewIcon />
      <p className="new-view__title">Create a View</p>
      <p className="new-view__desc">
        A view lets you see data from different angles, get started here
      </p>
      <p className="new-view__btn">
        <PlusIcon />
        <span>New View</span>
      </p>
      <Tooltip customclass={''}>
        <SubMenu
          dataList={[
            'Adjust Payer Affiliations',
            'Delete Patient Records',
            'Export Patient Records',
            'Generate Forms/Letters',
            'Hide/Show Selected Records',
            'Recalculate Patient Records',
            'Update Audit/Recovery Information',
            'View Contact Information',
          ]}
        />
      </Tooltip>
    </div>
  )
}

export default NewView
