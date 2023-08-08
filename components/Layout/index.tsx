import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import AdBlockerDetector from '../AdBlockerDetector'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <AdBlockerDetector>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </AdBlockerDetector>
)

export default Layout
