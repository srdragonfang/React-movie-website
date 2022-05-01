import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import './movies.css'
import Catagory from './Catagory'
import Button from '@atlaskit/button'
import img0 from '../../assets/img/arcane.jpg'
import img1 from '../../assets/img/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg'
import img2 from '../../assets/img/far-from-home.webp'
import img3 from '../../assets/img/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-preview.jpg'
import img4 from '../../assets/img/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg'
import img5 from '../../assets/img/john-wick-movies-movie-poster-wallpaper-preview.jpg'
import img6 from '../../assets/img/joker.jpg'
import img7 from '../../assets/img/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg'
import img8 from '../../assets/img/joker-pop-art-suicide-squad-movie-poster-wallpaper-preview.jpg'
import img9 from '../../assets/img/movies-movie-poster-portrait-display-fan-art-2001-a-space-odyssey-hd-wallpaper-preview.jpg'
import img10 from '../../assets/img/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-previe.jpg'
import img11 from '../../assets/img/star-wars-movies-star-wars-the-last-jedi-poster-wallpaper-preview.jpg'
import img12 from '../../assets/img/the-lion-king-2019-movie-poster-wallpaper-preview.jpg'
import img13 from '../../assets/img/Обзор фильма.png'
import img14 from '../../assets/img/The Jade Pendant (2017) ★★★★.png'
import img15 from '../../assets/img/The Invisible Guardian (2017) - IMDb.png'
import img16 from '../../assets/img/Streaming A Quiet Place Part II full hd movies online free.png'
import img17 from '../../assets/img/Land of Mine (2015) - IMDb.png'
import img18 from '../../assets/img/Blend Photos and Sharpen to Make Movie Poster in Photoshop.png'
import img19 from '../../assets/img/Dog_(2022_film).jpg'
import img20 from '../../assets/img/jackass.png'
import img21 from '../../assets/img/poster_wss_1200x1800_.jpg'
import img22 from '../../assets/img/MV5BMjQ1OWM3M2MtNzk5Ny00ZTBiLWFiOTYtYTM0MjA1NGI5NjE1XkEyXkFqcGdeQXVyNjY1NDM5OTU@._V1_FMjpg_UX1000_.jpg'
import { RiTv2Line } from 'react-icons/ri'

const Movies = () => {
    return (
        <div className="Movie__bg">
            <div className='Movie__catagory'>
                <Catagory />
            </div>
            <div className='Movie__data'>
                <h4><RiTv2Line size={20} /><span>Sokunmaru Originals</span></h4>
                <div className='Movie__list'>
                    <MovieItem
                        image={img0}
                        title={"Arcane"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Based on the world behind League of Legends, Arcane dives into the delicate balance between the rich, utopian city of Piltover Crest icon.png Piltover and the seedy, oppressed underground of Zaun Crest icon.png Zaun. Known across Runeterra as the city of progress, many of the most brilliant minds call these cities home. But the creation of hextech, a way for any person to control magical energy, threatens that balance. The story follows the origins of two iconic League champions-and the power that will tear them apart. Like the game on which it is based, Arcane is aimed at a 16+ audience and will deal with some more adult subject matter."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"}
                        title={"AQUAMAN"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={"https://m.media-amazon.com/images/M/MV5BMTcwMjIyMTc2Nl5BMl5BanBnXkFtZTcwOTQyMzc5Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}
                        title={"ALL GOOD THINGS"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Newly-discovered facts, court records and speculation are used to elaborate the true love story and murder mystery of the most notorious unsolved murder case in New York history."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img1}
                        title={"AVEBGERS - ENDGAME"}
                        rating={"⭐⭐⭐⭐"}
                        description={"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img2}
                        title={"SPIDER-MAN: FAR FROM HOME"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img3}
                        title={"GODZILLA"}
                        rating={"⭐⭐⭐⭐"}
                        description={"The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img4}
                        title={"INCEPTION"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img5}
                        title={"JOHN WICK"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img6}
                        title={"JOKER"}
                        rating={"⭐⭐⭐⭐"}
                        description={"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img7}
                        title={"ALIEN"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img8}
                        title={"JOKER: SUICIDE SQUAD"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img9}
                        title={"2001"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img10}
                        title={"THE LORD OF THE RINGS: THE RETURN OF KING"}
                        rating={"⭐⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img11}
                        title={"STAR WARS"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img12}
                        title={"THE LION KING"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img13}
                        title={"LOOK AWAY"}
                        rating={"⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img14}
                        title={"THE JADE PENDANT"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img15}
                        title={"IN GUARDIAN INVISIBLE"}
                        rating={"⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img16}
                        title={"QUIET PLACE 2"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img17}
                        title={"LANE OF MINE"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img18}
                        title={"THE HILL"}
                        rating={"⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img19}
                        title={"DOG"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img20}
                        title={"JACKASS FOREVER"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img21}
                        title={"WEST SIDE STORY"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                    <MovieItem
                        image={img22}
                        title={"VANISHING POINT"}
                        rating={"⭐⭐⭐⭐"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti quos quasi expedita libero, commodi ex laudantium neque facere, animi nesciunt sapiente. Facere pariatur deleniti voluptas saepe voluptate nesciunt rem tempore nisi quia reiciendis! Commodi magni sapiente magnam cupiditate, quasi, modi rem aut tenetur, eligendi excepturi nemo. Ad, nam libero."}
                        price={19.99}
                        oldprice={21.99}
                    />
                </div>
                <div className='Movie__list-btn'>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>...</Button>
                </div>
            </div>
        </div>
    )
}
export default Movies