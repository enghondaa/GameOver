import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Games() {
  return <>
  <section className='my-5 pt-5'>
    <div className="container">
        <Outlet>

        </Outlet>
    </div>
  </section>
  
  </>
}
