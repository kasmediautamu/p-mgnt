import React, { useState } from 'react'
import { useHistory } from 'react-router'
import auth from '../../auth/auth-helper'
import Side from '../../components/header/Side'
import Top from '../../components/header/Top'
import NewView from '../../components/newview'
import './styles.scss'

const Home = () => {
  let history = useHistory()
  if (!auth.isAuthenticated()) {
    history.push('/')
  }

  // settings views
  const [view, setView] = useState('relaxed')
  return (
    <div className="layout">
      <div className="left">
        <Side onSetView={setView} activeView={view}/>
      </div>
      <div className="right">
        <Top onSetView={setView} activeView={view} />
        {view === 'relaxed' && <NewView />}
        {view === 'stretched' && <NewView />}
      </div>
    </div>
  )
}
export default Home
