import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div>This is Header 
 <Link to='/contact'>contact us page</Link>
 <Link to='/checkout'>checkout</Link>

    </div>
  )
}
