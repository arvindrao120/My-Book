import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <div>
       <Navbar/>
        <Banner />
        <BookCard />
        <Footer />
      </div>
    </>
  )
}

export default Home