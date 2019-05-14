import React from 'react';
import './home.css';
import Header from '../Header';
import Slideshow from '../Slider';


const allStories = [
    {
        firstName: 'Sodiq', lastName: 'Alabi',
        username: 'adisco4420', story: 'This is a test story case',
        gender: 'male', headline: 'Once upon a time', likes: 2
    },
    {
        firstName: 'David', lastName: 'eze',
        username: 'davido', story: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
        gender: 'male', headline: 'Where does it come from', likes: 4
    }
]
class Home extends React.Component {
    state = {
        stories: allStories
    }
    saveStory = (item) => {
        const newItem = {...item, likes: 0}
        if(this.validateUsername(item.username)) {
            console.log('yes')
        } else {
            console.log('no')
        }
        const newStory = this.state.stories.concat(newItem)
        console.log(item)
        this.setState({stories: newStory})
    }
     validateUsername(username) {
        const found = this.state.stories.some(function (el) {
          return el.username === username;
        });
        if (!found && username.trim().length) {
          return true;
        } else {
          return false;
        }
      }
    getAvatar(item) {
        return item.firstName[0].toUpperCase() + item.lastName[0].toUpperCase()
    }
    getShortStory(item) {
        return item.story.slice(0, 20) + '...'
    }
    handleLike = (item, index) => {
        let stories = this.state.stories;
        let newStory = {...item, likes: item.likes + 1};
        stories[index] = newStory 
        this.setState({stories: stories});
    }
    render() {
        return (
            <React.Fragment>
                <Header saveStory={this.saveStory} />
                <Slideshow />
                <div className="container">
                    <h4 className="text-center text-danger mt-4">All Stories</h4>
                    <div className="row">
                        {
                            this.state.stories.map((item, index) => {
                                return <div key={index} className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="float-left">
                                                <span className="user-avatar">{this.getAvatar(item)}</span>
                                            </span>
                                            <div className="ml-5">
                                                <p className="text-muted">{item.username}</p>
                                                <h6>{item.headline}</h6>
                                                <p className="text-capitalize">{this.getShortStory(item)}</p>
                                                <span>
                                                    <button className="btn btn-sm btn-info">read more</button>
                                                    <span onClick={() => this.handleLike(item, index)} className="ml-2 like-btn"><i className="fa fa-thumbs-up"></i> {item.likes}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;