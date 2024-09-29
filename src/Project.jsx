import React from 'react';
export default function Project() {
    return (
      <>
        <p>My Projects</p>
        <hr />
            <div id="project1" className="project-container">
                <h2>Fetch API</h2>
                <img className="project-img" src="./src/assets/img/API.png" width="600" height="600" alt="Term Project" />
                <p className="project-paragraph">
                    <br />
                    In this project, I created a webpage to showcase several images fetched from API. The user can add and remove upto five images in the favourites box. 
                </p>
            </div>

            <div id="project2" className="project-container">
                <h2> Bug Smasher Game</h2>
                <img className="project-img" src="./src/assets/img/bsmasher.png" width="500" height="300" alt="SlideShow" />
                <p className="project-paragraph">
                    <br />
                    In this project, I created a game that keeps track of user's score. The bug randomly moves across the screen and the user must catch the bug to score a point.
                </p>
            </div>

            <div id="project3" className="project-container">
                <h2>Product Description</h2>
                <img className="project-img" src="./src/assets/img/pdescription.png" width="500" height="300" alt="Project4" />
                <p className="project-paragraph">
                    <br />
                    In this project, I created a webpage for a beauty store to display several items that they sell. The webpage displays an image of each product, short description, and a price. It also inculdes a dynamic map to show different locations across the country.
                </p>
            </div>
      </>
    );
  }