import {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';
//const API_KEY = ''
//**ENTER API KEY AS A 'STRING' REMOVE BEFORE UPLOAD**

function NewsCarousel() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetchNews()
    }, [])

async function fetchNews () {
    try {
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY
      const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=general`
        
        const res = await fetch(API_URL)
        const data = await res.json()

        setNews(data.articles)
    
    } catch (error) {
        alert(error.message)
    }
}

  return (
    /* <Carousel slide={false}> */
    <Carousel className="carousel-place">
      {news.map((singleNews, index) => (
      <Carousel.Item key={index} interval={2000}> 
        <img
          className="d-block news-image"
          src={singleNews.urlToImage}
        />
        <Carousel.Caption>
          <h3>{singleNews.title}</h3>
          <p>{singleNews.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NewsCarousel;

/*
NOTES

Import css file
Line 2 - Note the syntax for importing the developer created Carousel.css file

CSS file
Line 3- import './index.css'; imports css file now that it has been moved into the Carousel folder within components

API KEY
Line 4 - Add the API key from account as a string within ' '.  This was used in the initial set up and testing. It has now been supersed by the creation of an .env file to hold the API key.  The .env folder is inside the general app folder (outer wrapper) and .env is listed in gitignore so that the api key is not tracked by git and it is therefore secure when code is pushed to GitHub.

Line 16 orignially read as follows:-
const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=general`) when the function was first set up and tested. Now const API_URL and const res have been separated out to make the code more readable


Carousel news item change
Lines 29/30 - <Carousel slide={false}> this tag + prop enables user to manually change image it is commented out and instead <Carousel> ln 29, is simply a <Carousel> tag.  To revert to manual swap these back and remove the interval prop in ln 31
Line 32 - <Carousel.Item key={index} interval={2000}> the interval prop enables the carousel to scroll automatically every 2 secs
Line 34 - regarding className="d-block news-image" - news-image is the developer created styles for this element in the index.css file




*/