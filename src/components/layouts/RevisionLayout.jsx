import React from 'react'
import { Outlet } from 'react-router-dom'
import RevisionHeader from './Revision.jsx'

const RevisionLayout = () => {
  return (
    <>
        <RevisionHeader />
        <Outlet />
    </>
  )
}

export default RevisionLayout