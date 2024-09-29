import React from 'react';

export default function About() {
    return (
      <>
        <p>About Me</p>
        <div >

                <hr />
                <br />
                <div className="about-container">
                    <img className='project-img' src="./src/assets/img/maryam.jpg" width="300" height="300" alt="Avatar" />
                </div><br></br>
                <h2>Maryam Khan</h2>
                <div >
                    <p className="mission-statement">
                        My name is Maryam and I am currently in my second year of studying Software Engineering Technology at Centennial College. I am a curious and creative person and I enjoy designing web pages. I am also a plant enthusiast and love to bake desserts for my family and friends.
                    </p>
                </div>
                <br></br>
                <br></br>
                <button className="btn-download" type="button">
                    <a id="aboutText" class="btn btn-xl btn-outline-dark" href="./src/assets/res/Khan_Resume.docx">
                        <i class="fas fa-download me-2 "></i>
                        Download My Resume
                    </a>

                </button>
            </div>
            <br></br>
      </>
    );
  }  