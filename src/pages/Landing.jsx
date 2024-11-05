//rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card';
import feature1 from '../assets/music1.jpg'
import feature2 from '../assets/music2.jpg'
import feature3 from '../assets/music3.webp'

  const Landing = () =>{
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>

        </div>
        <div className='col-lg'></div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5' src={landingImg} alt="" />
        </div>

        

      </div>

      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div  className='row mt-5'>
          <div className='col-lg-4'> <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        Users can upload, view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
        Users can categorise the videos by drag and drop feature.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>

      {/* last */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Managing Videos:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid, eaque molestias, commodi quisquam tempora dolore libero consectetur accusamus maiores veniam alias possimus repellat repellendus nam quidem sit modi eius.</p>

          <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Categorise Videos:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid, eaque molestias, commodi quisquam tempora dolore libero consectetur accusamus maiores veniam alias possimus repellat repellendus nam quidem sit modi eius.</p>

          <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Managing History:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid, eaque molestias, commodi quisquam tempora dolore libero consectetur accusamus maiores veniam alias possimus repellat repellendus nam quidem sit modi eius.</p>

        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="100%" height="514" src="https://www.youtube.com/embed/UPQZ4vuvW2s" title="Munbe Vaa HD Video Song | Sillunu Oru Kadhal Tamil Movie | Suriya | Bhumika | Jyothika | AR Rahman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

      </div>


    </div>
  )
}

export default Landing