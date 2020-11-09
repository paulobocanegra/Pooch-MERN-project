import React from 'react';
import "./learnmore_css.css"
class LearnMore extends React.Component{
    

    render(){
        return (
          <div className="Modal-screen1">
            <div className="Modal-box1">
              <button
                onClick={this.props.closeModal}
                className="Modal-button-learnmore"
              >
                ✕
              </button>
              <h1>
                Pooch can open up a whole other world for you and your pup
              </h1>
              <div className="learn-text">
                With our app you can find other dog lovers just like you, simply
                sign up and start swiping! You will see people and dogs of all genders. The purpose of Pooch is to find
                playmates for your dogs and make new friends along the way!
              </div>
            </div>
          </div>
        );
    }

}

export default LearnMore;