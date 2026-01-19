import {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
const API_KEY = ''
//**ENTER API KEY AS A 'STRING' REMOVE BEFORE UPLOAD**

function NewsCarousel() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetchNews()
    }, [])

async function fetchNews () {
    try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d2e45f7515204683953252ac4178c880&category=general')
        
        const data = await res.json()

        setNews(data.articles)
    
    } catch (error) {
        alert(error.message)
    }

}






  return (
    <Carousel slide={false} style={{ maxHeight: '50vh'}}>
      {news.map((singleNews, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block news-image"
          src="https://ichef.bbci.co.uk/news/1024/branded_news/de0d/live/14290d90-f493-11f0-a422-4ba8a094a8fa.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{singleNews.title}</h3>
          <p>{singleNews.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
/*
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
*/
  );
}

export default NewsCarousel;

/*
NOTES

Import css file
Line 2 - Note the syntax for importing the developer created Carousel.css file
*/