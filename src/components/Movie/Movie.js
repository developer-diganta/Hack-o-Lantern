import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Movie.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Movie() {
    const[movies, setMovies] = useState(null);
    const[dis, setDis] = useState(0);
    const[intro, setIntro] = useState(false);
    const options = {
        method: 'GET',
        url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
        params: {with_genres: '27', page: '1'},
        headers: {
          'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
          'x-rapidapi-key': '7fac06f0dcmsh1aae70097d894a4p165d1djsn6ea245d29959'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.results);
          setMovies(response.data.results);
      }).catch(function (error) {
          console.error(error);
      });

      useEffect(() => {setTimeout(() => {
        setIntro(true);
      }, 8000)}, [setIntro])
    return (
        <div className="body">
            <div className="intro" style={{display: intro === false ? "flex" : "none"}}>
                <div style={{display: "block", textAlign: "center"}}>
                    <img src="hallow_pump.png" alt="" style={{width: "200px", boxShadow: "4px 10px 14px 2px rgba(232, 14, 4, 0.6)", borderRadius: "50%"}} />
                    <p style={{margin: "0", color: "#FFF", position: "relative"}}>Welcome to the zombie theater <br /> Now airing your worst nightmare</p>
                </div>
            </div>
            <div className="background" style={{display: intro === true ? "block" : "none"}}>
                <div className="movie_div">
                    <h1 style={{margin: "0 auto", color: "#FFF", textAlign: "center", padding: "14px 0px", textTransform: "uppercase", letterSpacing: "8px", borderBottom: "1px solid red", width: "200px"}}>Movies</h1>
                    <Carousel
                        // autoPlay={true}
                        interval={3000}
                        infiniteLoop={true}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        centerMode={true}
                        centerSlidePercentage={70}
                        >
                        {
                            movies ? 
                            movies.map((element) => (
                                <div className="g" style={{height: "500px", marginTop: "10px"}}>
                                    <img src={element.backdrop_path} alt="" style={{height: "500px", opacity: "0.6", filter: "blur(2px)"}} />
                                    <div className="des">
                                        <div style={{paddingBottom: "20px"}}>
                                            <h4 style={{color: "white", margin: "0px", textTransform: "uppercase", fontSize: "30px", wordSpacing: "2px", letterSpacing: "5px"}}>{element.title}</h4>
                                            <div style={{borderBottom: "2px solid red", width: "80px"}}></div>
                                        </div>
                                        <p style={{display: dis === element.id ? "block" : "none", color: "white", wordSpacing: "4px", letterSpacing: "2px"}}>{element.overview}</p>
                                        <button className="button_play" onClick={() => {
                                            setDis(element.id)
                                            console.log(dis);
                                            }}>About</button>
                                    </div>
                                </div>
                            ))
                            :
                            console.log("ABCD")
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Movie
