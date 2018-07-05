import React from 'react'
import { withRouteData, Link } from 'react-static'

//

export default withRouteData(({ about }) => (
  <div>
    {<h1>{about.headline}</h1>}
    {<h2>{about.subhead}</h2>}
    {<p>{about.body}</p>}
  </div>
))
