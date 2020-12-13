import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImage from '../images/sliderImage.jpeg';
import ImageGallery from '../images/image-gallery.png';
import ShopImage from '../images/shop-image.jpg';
import LogoWgite from '../images/logo-white.png';
import GoogleMapReact from 'google-map-react'

// Component for Map
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: '#f098c8',
    padding: '10px',
    display: 'block',
    borderRadius: '50%',

  }}>
    {text}
  </div>
);


class Home extends React.Component {

  // Props for Map
  static defaultProps = {
    center: { lat: 8.98, lng: -79.52 },
    zoom: 15
  };

  render() {

    return (

      <div>

        {/* header section */}
        <div className='left-side'>

          {/* image slider */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sliderImage}
                alt="First slide" style={{ width: 700, height: 600 }}
              />
              <Carousel.Caption>

              </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Third slide" style={{ width: 700, height: 600 }}
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
                alt="Third slide" style={{ width: 700, height: 600 }}
              />

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>

        <div className='right-side'></div>

        <div className='header-card'>

          <h1>Retro: Old is</h1>
          <h1>New Again</h1>
          <p>Dolor fermentum tristique eget id nisl. Ut vel varius risus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <a href='#'><p>discover this trend <i class="fa fa-arrow-right"></i></p></a>

        </div>


        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-container">

            <div className='gallery gallery-card'>

              <h1>Discover your true style</h1>
              <p>Penatibus et magnis dis montes, nascetur ridiculus mus.</p>
              <a href='#'><p>explore our trends <i class="fa fa-arrow-right"></i></p></a>

            </div>
            <div className='gallery'></div>
            <div className='gallery'>
              <img src={ImageGallery} />
            </div>
            <div className='gallery'></div>
            <div className='gallery'></div>
            <div className='gallery'></div>
            <div className='gallery'></div>
            <div className='gallery'></div>
          </div>
        </div>


        {/* Shop Section */}
        <div className="shop-container">
          <div className='shop-image'>
            <img src={ShopImage} />
          </div>
          <div className='shop-info'>
            <h1>Shop anything and everything</h1>
            <p>Dolor fermentum tristique eget id nisl. Ut vel varius risus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <a href='#'><p>browse our collections <i class="fa fa-arrow-right"></i></p></a>
          </div>
        </div>


        {/* Learn Section */}
        <div className='learn-container'>
          <div className='learn-box'>
            <div className='learn-info'>
              <h1>Learn more about</h1>
              <p>Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <a href='#'><p>read more <i class="fa fa-arrow-right"></i></p></a>
            </div>
          </div>
          <div className='learn-box'>
            <div className='learn-info'>
              <h1>Learn more about</h1>
              <p>Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <a href='#'><p>read more <i class="fa fa-arrow-right"></i></p></a>
            </div>
          </div>
          <div className='learn-box'>
            <div className='learn-info'>
              <h1>Learn more about</h1>
              <p>Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <a href='#'><p>read more <i class="fa fa-arrow-right"></i></p></a>
            </div>
          </div>

        </div>



        {/* Found Section */}
        <div className='found-container'>
          <h1>Found in over</h1>
          <h1>xxxx stores</h1>
          <a href='#'><p>find a store near you <i class="fa fa-arrow-right"></i></p></a>
        </div>

        {/* Map */}
        <div className='map-container'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={8.985333}
              lng={-79.519670}
              text={''} />

            <AnyReactComponent
              lat={8.980333}
              lng={-79.513670}
              text={''} />

            <AnyReactComponent
              lat={8.9789999}
              lng={-79.528550}
              text={''} />

            <AnyReactComponent
              lat={8.9849999}
              lng={-79.534550}
              text={''} />

          </GoogleMapReact>

        </div>


        {/* Footer */}
        <div className="footer-content">

          <div className='footer-bottom'>

            <ul className='footer-menu'>
              <li><a href='#'>trends</a></li>
              <li><a href='#'>collections</a></li>
              <li><a href='#'>tip & guides</a></li>
              <li><a href='#'>find a store</a></li>
              <li><a href='#'>careers</a></li>
            </ul>
            <div className='contact-info'>
              <p>tel:+(507) 314-7709</p>
              <p>fax:+(507) 314-7709</p>
              <a href="mailto:info@tiendaconceptslife.com">info@tiendaconceptslife.com</a>
            </div>

            <div className='contact-info2'>
              <p>Av. República de Brasil 303</p>
              <p>Panamá</p>
              <p>Panamá</p>
            </div>


            <div className='credits'>
              <img className='logo-white' src={LogoWgite}></img>
              <p>All rights reseved &#169; Tienda Concepts Life</p>
            </div>

            <div className='socials'>
              <div>
                follow us <a href="#"> <i class="fab fa-twitter"></i></a>
                <a href="#"> <i class="fab fa-facebook-f"></i></a>
                <a href="#"> <i class="fab fa-instagram"></i></a>
              </div>
              <p>Created by Isaac Groisman</p>
            </div>


          </div>




        </div>
        
        <div className='footer-container'>

          <div className='footer-left'></div>

          <div className='footer-right'></div>

        </div>


      </div>
    )

  }


}

export default Home;