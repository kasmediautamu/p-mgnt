import React, { useRef, useState } from 'react'
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
import DropdownSelect from '../../FormFields/Select'
import OutsideClickHandler from 'react-outside-click-handler'

import './styles.scss'
import Tooltip from '../../Popper/P'
import SubMenu from './Sub'

type IProps = {
  onSetView: any
  activeView: any
}
const Top = (props: IProps) => {
  const { onSetView, activeView } = props
  // eslint-disable-next-line no-restricted-globals
  const [isOpen, setOpen] = useState(false)
  const [Type, setType] = useState<string>('')
  const [Layout, setLayout] = useState<string>('')
  const [Search, setSearch] = useState<string>('')
  const [links, setLinks] = useState('')
  // click list outside
  const openLinks = () => {
    setOpen(!isOpen)
    console.log('hi')
  }


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
  function TopMenu() {
    if (activeView === 'stretched') {
      return (
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
            <DropdownSelect
              items={['My Last Quick Search', 'Records', 'Accounts']}
              value={Search === '' ? '[My Last Quick search]' : Search}
              onChange={(value: string) => {
                setSearch(value)
              }}
            />
          </div>
          <div className="links">
            <p>Type</p>
            <DropdownSelect
              items={['Default', 'All Types', 'Types']}
              value={Type === '' ? 'Default' : Type}
              onChange={(value: string) => {
                setType(value)
              }}
            />
          </div>
          <div className="links">
            <p>Layouts</p>
            <DropdownSelect
              items={['Default', 'All Layouts', 'Layouts']}
              value={Layout === '' ? 'Default' : Layout}
              onChange={(value: string) => {
                setLayout(value)
              }}
            />
          </div>
          <div className="links" onClick={() => setLinks('modify')}>
            <ModifyIcon />
            <p>Modify</p>
            <DownarrowIcon />
            {links === 'modify' && (
                <Tooltip customclass={''}>
                  <SubMenu
                    dataList={[
                      'modify',
                      'Delete Patient Records',
                      'Export Patient Records',
                      'Generate Forms/Letters',
                    ]}
                  />
                </Tooltip>
            )}
          </div>
          <div className="links" onClick={() => setLinks('filter')}>
            <FilterIcon />
            <p>Filter</p>
            <DownarrowIcon />
            {links === 'filter' && (

                <Tooltip customclass={''}>
                  <SubMenu
                    dataList={[
                      'filter',
                      'Delete Patient Records',
                      'Export Patient Records',
                      'Generate Forms/Letters',
                    ]}
                  />
                </Tooltip>

            )}
          </div>

          <div className="links" onClick={() => setLinks('action')}>
            <ActionIcon />
            <p>Action</p>
            <DownarrowIcon />
            {links === 'action' && (

                <Tooltip customclass={''}>
                  <SubMenu
                    dataList={[
                      'Action',
                      'Delete Patient Records',
                      'Export Patient Records',
                      'Generate Forms/Letters',
                    ]}
                  />
                </Tooltip>

            )}
          </div>
          <div className="links" onClick={() => setLinks('search')}>
            <SearchIcon />
            <p>Search</p>
            <DownarrowIcon />
            {links === 'search' && (

                <Tooltip customclass={''}>
                  <SubMenu
                    dataList={[
                      'search',
                      'Delete Patient Records',
                      'Export Patient Records',
                      'Generate Forms/Letters',
                    ]}
                  />
                </Tooltip>

            )}
          </div>
          <div className="links" onClick={() => setLinks('help')}>
            <HelpIcon />
            <p>Help</p>
            <DownarrowIcon />
            {links === 'help' && (

                <Tooltip customclass={''}>
                  <SubMenu
                    dataList={[
                      'Adjust Payer Affiliations',
                      'Delete Patient Records',
                      'Export Patient Records',
                      'Generate Forms/Letters',
                    ]}
                  />
                </Tooltip>

            )}
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
