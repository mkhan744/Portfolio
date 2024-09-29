import React from 'react';
export default function services() {
    return (
      <>
        <p>My Services</p>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4>General programming</h4>
                    <img className="services-img" src="./src/assets/img/gprogramming.png" width="80" height="100" alt="Web Developing" />
                    
                    <h4>Web development</h4>
                    <img className="services-img" src="./src/assets/img/wdevelopment.jpg" width="200" height="100" alt="C-sharp" />
                    
                    <h4>Mobile apps</h4>
                    <img className="services-img" src="./src/assets/img/mapps.jpg" width="200" height="100" alt="App" />
                </div>
      </>
    );
  }