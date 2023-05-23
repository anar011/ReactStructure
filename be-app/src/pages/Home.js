import React from 'react'
import Footer from '../component/layouts/Footer'
import Header from '../component/layouts/Header'
import Mains from '../component/layouts/Mains'

function Home() {
  return (
    <>
      <header><Header/></header>
      <main><Mains/></main>
      <footer><Footer/></footer>
    </>
  )
}

export default Home
