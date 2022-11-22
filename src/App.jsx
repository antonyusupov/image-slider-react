import React from 'react';
import Slider from './components/Slider';
import './App.css';

function App() {


    const images = [
        {
            img : 'https://images.pexels.com/photos/9818645/pexels-photo-9818645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img : 'https://images.pexels.com/photos/5083407/pexels-photo-5083407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img : 'https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img : 'https://images.pexels.com/photos/3906110/pexels-photo-3906110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img : 'https://images.pexels.com/photos/5071339/pexels-photo-5071339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img : 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]


  return (
    <div className='App' id='App'>
        <h1>Image Sider</h1>
        <Slider images={images} />
        <p>This image slider is awsome</p>
    </div>
  )
}

export default App;