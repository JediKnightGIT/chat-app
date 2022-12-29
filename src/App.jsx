import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './components/app.scss'

import Dialogs from './components/Dialogs/Dialogs'
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Dialogs/Chat/Chat'
import Login from './components/Login/Login'
import Settings from './components/Settings/Settings'
import { withRouter } from './components/hoc/withRouter'
import Spinner from './components/common/Spinner/Spinner'
import { useApp } from './useApp'


function App() {
  const { initialized } = useApp()

  if (!initialized) return <Spinner />

  return (
    <div className="app-wrapper">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dialogs />}>
            <Route path=":userId" element={<Chat />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  )
}

export default withRouter(App)