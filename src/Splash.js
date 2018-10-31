import React, { Component } from 'react';

import './Splash.css'
import './App.css';

export default class Splash extends Component {

  displayMainPage = (event) => {
    event.preventDefault();
    let splashPage = document.querySelector('.splash')
    let fetchDogs = document.querySelector('.fetch-dogs-btn')
    let cardContainer = document.querySelector('.card-container-selector')
    splashPage.classList.remove('splash')
    splashPage.classList.add('display-none')
    cardContainer.classList.remove('display-none')
    cardContainer.classList.add('card-container')
    if (event.target === fetchDogs) {
      this.props.filterDogs(event) 
    } else if (event.target === document.querySelector('.show-all-dogs-btn')) {
      this.props.alldogs()
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="splash">
        <h1 className='splash-title'>Fetch <i className="fas fa-dog"></i> </h1>
        <form>
            <div className="switch three-switch">
              <input className='radios' type="radio" name="choose1" id='Male' value="Male" />
              <input className='radios' type="radio" name="choose1" id='Male Female' value="both" defaultChecked />
              <input className='radios' type="radio" name="choose1" id='Female' value="Female" />
            </div>
          </form>
          <form>
            <div className="switch three-switch">
              <input className='radios' type="radio" name="choose2" value="Puppy" />
              <input className='radios' type="radio" name="choose2" value="both" defaultChecked />
              <input className='radios' type="radio" name="choose2" value="Adult" />
            </div>
          </form>
          <form>
            <div className="switch">
              <input className='radios' type="radio" name="choose3" id='Large' value="Large" />
              <input className='radios' type="radio" name="choose3" id='Medium' value="Medium" />
              <input className='radios' type="radio" name="choose3" id='Large Medium Small' value="all" defaultChecked />
              <input className='radios' type="radio" name="choose3" id='Small' value="Small" />
            </div>
          <button className='fetch-dogs-btn' onClick={ this.displayMainPage }>Fetch Dogs</button>
        </form>
      </div>
    )
  }
}

