import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <div className=''>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
