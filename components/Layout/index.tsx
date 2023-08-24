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
      <div>
        <script data-cfasync="false" async type="text/javascript" src="//wytingqueery.com/gE4ukaBpp5tou/68736"></script>
      </div>
      {children}
      <Footer />
    </div>
  </AdBlockerDetector>
)

export default Layout
