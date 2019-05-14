import React from 'react';
import './home.css';
import Header from '../Header';
import Slideshow from '../Slider';


const allStories = [
    {
        firstName: 'Jon', lastName: 'Snow',
        username: 'jonsnow', story: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, discovered the undoubtable source`,
        gender: 'male', headline: 'Where can I get some', likes: 2
    },
    {
        firstName: 'David', lastName: 'eze',
        username: 'davido', story: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
        gender: 'male', headline: 'Where does it come from', likes: 4
    },
    {
        firstName: 'Kate', lastName: 'Okwuraiwe',
        username: 'ketazy', story: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus`,
        gender: 'female', headline: 'Finibus Bonorum et Malorum', likes: 6
    },
]
class Home extends React.Component {
    state = {
        stories: allStories,
        moreStories: {}
    }
    saveStory = (item) => {
        const newItem = { ...item, likes: 0 }
        if (this.validateUsername(item.username)) {
            const newStory = this.state.stories.concat(newItem);
            this.setState({ stories: newStory })
        } else {
            alert('You can only share one story')
        }
    }
    validateUsername(username) {
        const found = this.state.stories.some(function (el) {
            return el.username.toLowerCase() === username.toLowerCase();
        });
        if (!found && username.trim().length) {
            return true;
        } else {
            return false
        }
    }
    getAvatar(item) {
        const fristName =  item.firstName  ? item.firstName[0].toUpperCase() : '';
        const lastName = item.lastName ? item.lastName[0].toUpperCase() : ''
        return fristName + lastName
    }
    getShortStory(item) {
        return item.story.slice(0, 100) + '...'
    }
    handleLike = (item, index) => {
        let stories = this.state.stories;
        let newStory = { ...item, likes: item.likes + 1 };
        stories[index] = newStory
        this.setState({ stories: stories });
    }
    showMore = (item) => {
        this.setState({moreStories: item});
    }
    render() {
        return (
            <React.Fragment>
                <Header saveStory={this.saveStory} />
                <Slideshow />
                <div className="container">
                    <h4 className="text-center text-monospace text-danger mt-4">All Valentine Love Stories</h4>
                    <div className="row">
                        {
                            this.state.stories.map((item, index) => {
                                return <div key={index} className="col-md-4 mb-2">
                                    <div className="card">
                                        <div className="card-header">
                                            <span className="float-left mr-3">
                                                <span className="user-avatar">{this.getAvatar(item)}</span>
                                            </span>
                                            <p className="text-muted">{item.username}</p>
                                        </div>
                                        <div className="card-body" style={{ minHeight: '180px' }}>

                                            <div className="">
                                                <h6>{item.headline}</h6>
                                                <p className="text-capitalize">{this.getShortStory(item)}</p>
                                                <span>
                                                    <button data-toggle="modal" data-target="#readMore" onClick={() => this.showMore(item)} className="btn btn-sm btn-info">read more</button>
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
                <div className="modal fade" id="readMore" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <span className="float-left mr-3">
                                                <span className="user-avatar">{this.getAvatar(this.state.moreStories)}</span>
                                            </span>
                                            <p className="text-muted">{this.state.moreStories.username}</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               <h6>{this.state.moreStories.headline}</h6>
                               <p>{this.state.moreStories.story}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;