import React from 'react'
import './banner.css'
import ButtonList from '../ButtonList/ButtonList.js'
const Banner = () => {

    return (
        <div className='Banner__bg'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://images8.alphacoders.com/121/1211632.jpg")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="Banner__info">
                <h1>ARCANE</h1>
                <div className="Banner__description">
                    <p>Based on the world behind League of Legends, Arcane dives into the delicate balance between the rich, utopian city of Piltover Crest icon.png Piltover and the seedy, oppressed underground of Zaun Crest icon.png Zaun. Known across Runeterra as the "city of progress," many of the most brilliant minds call these cities home. But the creation of hextech, a way for any person to control magical energy, threatens that balance. The story follows the origins of two iconic League champions-and the power that will tear them apart. Like the game on which it is based, Arcane is aimed at a "16+" audience and will deal with some more adult subject matter.</p>
                </div>
                <ButtonList />
            </div>

        </div >
    )
}
export default Banner