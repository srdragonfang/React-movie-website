import React from 'react'
import Movies from '../components/Movies/Movies'
import Credits from '../components/Credits/Credits'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
const HomePage = () => {
    return (
        <>
            <div className="Homepage__bg">
                <Banner />
                <Navbar />
                <Movies />
                <Credits />
            </div>
        </>
    )
}

export default HomePage