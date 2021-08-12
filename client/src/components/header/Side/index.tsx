import React from 'react'
import { ReactComponent as Automatedview } from '../../../assets/automatedview.svg'
import { ReactComponent as Documentslibrary } from '../../../assets/documentslibrary.svg'
import { ReactComponent as DocumentTypes } from '../../../assets/documentTypes.svg'
import { ReactComponent as Downarrow } from '../../../assets/downarrow.svg'
import { ReactComponent as LogoIcon } from '../../../assets/logo.svg'
import { ReactComponent as QuicksearchIcon } from '../../../assets/quicksearch.svg'
import { ReactComponent as ReferencesIcon } from '../../../assets/references.svg'
import { ReactComponent as WorklistIcon } from '../../../assets/worklist.svg'
import { ReactComponent as ViewAdministrationIcon } from '../../../assets/viewAdmin.svg'
import { NavLink } from 'react-router-dom'

import './styles.scss'
type IProps = {
  onSetView: any
  activeView: any
}
const Side = (props: IProps) => {
  const { onSetView, activeView } = props
  function RenderSideNav() {
    if (activeView === 'stretched') {
      return (
        <>
          <div className="side-nav">
            <div className="side-nav__group side-nav__group--logo">
              <div className="side-nav__item">
                <LogoIcon />
                <p>LogoName</p>
              </div>
            </div>
            <p className="side-nav__title">Account management</p>
            <div className="side-nav__group">
              <div className="side-nav__item">
                <NavLink to="/home" activeClassName="selected">
                  <WorklistIcon />
                  <p>My Worklist</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/view Administration" activeClassName="selected">
                  <ViewAdministrationIcon />
                  <p>View Administration</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/quicksearch" activeClassName="selected">
                  <QuicksearchIcon />
                  <p>Quick Search</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/Preferences" activeClassName="selected">
                  <ReferencesIcon />
                  <p>Preferences</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/automated-views" activeClassName="selected">
                  <Automatedview />
                  <p>Automated Views</p>
                </NavLink>
              </div>
            </div>
            <p className="side-nav__title">CPT management</p>
            <div className="side-nav__group">
              <div className="side-nav__item">
                <NavLink to="/work-list" activeClassName="selected">
                  <WorklistIcon />
                  <p>My Worklist</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/view-administration" activeClassName="selected">
                  <ViewAdministrationIcon />
                  <p>View Administration</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/quick-search">
                  <QuicksearchIcon />
                  <p>Quick Search</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/preferences" activeClassName="selected">
                  <ReferencesIcon />
                  <p>Preferences</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/automated-views" activeClassName="selected">
                  <Automatedview />
                  <p>Automated Views</p>
                </NavLink>
              </div>
            </div>
            <p className="side-nav__title">Custom forms</p>
            <div className="side-nav__group side-nav__group--last">
              <div className="side-nav__item">
                <NavLink to="/document-library" activeClassName="selected">
                  <Documentslibrary />
                  <p>Document Library</p>
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/document-types" activeClassName="selected">
                  <DocumentTypes />
                  <p>Document Types</p>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="side-nav stretched">
            <div className="side-nav__group side-nav__group--logo">
              <div className="side-nav__item">
                <LogoIcon />
              </div>
            </div>
            <p className="side-nav__title">ACT</p>
            <div className="side-nav__group">
              <div className="side-nav__item">
                <NavLink to="/home" activeClassName="selected">
                  <WorklistIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/view Administration" activeClassName="selected">
                  <ViewAdministrationIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/quicksearch" activeClassName="selected">
                  <QuicksearchIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/Preferences" activeClassName="selected">
                  <ReferencesIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/automated-views" activeClassName="selected">
                  <Automatedview />
                </NavLink>
              </div>
            </div>
            <p className="side-nav__title">CPT</p>
            <div className="side-nav__group">
              <div className="side-nav__item">
                <NavLink to="/work-list" activeClassName="selected">
                  <WorklistIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/view-administration" activeClassName="selected">
                  <ViewAdministrationIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/quick-search">
                  <QuicksearchIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/preferences" activeClassName="selected">
                  <ReferencesIcon />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/automated-views" activeClassName="selected">
                  <Automatedview />
                </NavLink>
              </div>
            </div>
            <p className="side-nav__title">CUS</p>
            <div className="side-nav__group side-nav__group--last">
              <div className="side-nav__item">
                <NavLink to="/document-library" activeClassName="selected">
                  <Documentslibrary />
                </NavLink>
              </div>
              <div className="side-nav__item">
                <NavLink to="/document-types" activeClassName="selected">
                  <DocumentTypes />
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
  return (
    <>
      <RenderSideNav />
    </>
  )
}
export default Side
