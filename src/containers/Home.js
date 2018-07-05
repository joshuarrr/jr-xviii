import React from 'react'
import { withRouteData, Link } from 'react-static'

//
import logoImg from '../logo.png'

export default withRouteData(({ home }) => (
  <div>
    {<img className="site-logo" src={logoImg} alt="" />}
    {<h1>{home.headline}</h1>}
    {<h2>{home.subhead}</h2>}
    {<p>{home.body}</p>}
  </div>
))
