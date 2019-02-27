import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile_picture.png';

class App extends Component {
  state = { displayBio: false }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Tyler.</p>
        <Title />
        <p>I'm always looking for new ways to apply my knowledge.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in the Toronto area and I code everyday.</p>
              <p>I love JavaScript and Python equally, and I am a huge fan of React.js.</p>
              <p>Besides coding, I also love to study philosophy and psychology.</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;
