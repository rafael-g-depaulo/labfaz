import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import ReactGa from 'react-ga'

const RouteTracker = ({ history }: RouteComponentProps ) => {
  history.listen((location, _action) => {
    ReactGa.set({ page: location.pathname })
    ReactGa.pageview(location.pathname)
  })

  return <div></div>
}

export default  withRouter(RouteTracker)
