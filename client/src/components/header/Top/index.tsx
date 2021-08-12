import React from 'react'
import { ReactComponent as ApplyIcon } from '../../../assets/apply.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/delete.svg'
import { ReactComponent as EditIcon } from '../../../assets/edit.svg'
import { ReactComponent as FilterIcon } from '../../../assets/filter.svg'
import { ReactComponent as HelpIcon } from '../../../assets/help.svg'
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg'
import { ReactComponent as NewviewIcon } from '../../../assets/newview.svg'
import { ReactComponent as DownarrowIcon } from '../../../assets/downarrow.svg'
import { ReactComponent as ModifyIcon } from '../../../assets/modify.svg'
import { ReactComponent as SearchIcon } from '../../../assets/search.svg'
import { ReactComponent as ActionIcon } from '../../../assets/action.svg'
import './styles.scss'

type IProps = {
  onSetView: any
  activeView: any
}
const Top = (props: IProps) => {
  const { onSetView, activeView } = props
  function Menu() {
    if (activeView === 'stretched') {
      return (
        <div className="links" onClick={() => onSetView('relaxed')}>
          <MenuIcon />
          <p className="toggled">Menu</p>
        </div>
      )
    } else {
      return (
        <div className="links" onClick={() => onSetView('stretched')}>
          <MenuIcon />
          <p className="view__title">Menu</p>
        </div>
      )
    }
  }
  function TopMenu(){
    if(activeView === 'stretched'){
      return(
        <>
        <>
          <Menu />
        </>
        <div className="links">
          <NewviewIcon />
          <p>New View</p>
        </div>
        <div className="links">
          <EditIcon />
          <p>Edit</p>
        </div>
        <div className="links">
          <DeleteIcon />
          <p>Delete</p>
        </div>
        <div className="links">
          <ApplyIcon />
          <p>Apply</p>
        </div>
        <div className="links">
          <FilterIcon />
          <p>Filter</p>
        </div>
        <div className="links">
          <HelpIcon />
          <p>Help</p>
        </div>
        </>
      )
    } else {
      return (
        <>
          <>
          <Menu />
        </>
        <div className="links">
          <p>View</p>
          <p>[My Last Quick Search]</p>
        </div>
        <div className="links">
          <p>Type</p>
          <p>Default</p>
        </div>
        <div className="links">
          <p>Layouts</p>
          <p>Default</p>
        </div>
        <div className="links">
          <ModifyIcon />
          <p>Modify</p>
          <DownarrowIcon/>
        </div>
        <div className="links">
          <FilterIcon />
          <p>Filter</p>
          <DownarrowIcon/>
        </div>
        <div className="links">
          <ActionIcon />
          <p>Action</p>
          <DownarrowIcon/>
        </div>
        <div className="links">
          <SearchIcon />
          <p>Search</p>
          <DownarrowIcon/>
        </div>
        <div className="links">
          <HelpIcon />
          <p>Help</p>
          <DownarrowIcon/>
        </div>
        </>
      )
    }
  }
  return (
    <div className="top-navigation">
      <div className="top-navigation__items">
          <TopMenu />
      </div>
    </div>
  )
}
export default Top
