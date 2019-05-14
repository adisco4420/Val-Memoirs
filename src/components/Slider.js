import React from 'react';
import { Slide } from 'react-slideshow-image';
import axios from 'axios';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class Slideshow extends React.Component {
  state = {
    allImages: null
  }
  async componentDidMount() {
    try {
      const ACCESS_KEY = 'df6a69363febce05839bf41e737cbeddabce268ab26166d8bea92379400fdc00'
      const res = await axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);
      const images = res.data.splice(0, 5)
      this.setState({ allImages: images })
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <React.Fragment>
        {
          !this.state.allImages ?
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center mt-4">
                  <i className="fa fa-spinner fa-spin fa-5x"></i>
                </div>
              </div>
            </div> :
            <Slide {...properties}>
              {
                this.state.allImages.map((item, index) => {
                  return <div  key={index} className="each-slide container">
                    <div className="" style={{
                      'backgroundImage': `url(${item.urls.regular})`,
                      height: '400px', width: '100%', backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                  </div>
                })
              }
            </Slide>
        }
      </React.Fragment>
    )
  }
}
export default Slideshow