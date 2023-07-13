import React from 'react';
import './index.css';
import axios from 'axios';
import Header from './components/Header';
import Input from './components/Input';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

function App() {

  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=3412fb04e2dabcc188b73463e2467b55`
  
  function searchLocation(event){
    if(event.key === 'Enter'){
      axios.get(url).then(response => {
        setData(response.data)
      }, (error) => {
        message()
      })
       setLocation('')
    }
  }
  function message(){setErrorMessage('Please enter a valid location')}

  const onChange = event => {
    setLocation(event.target.value)
    setErrorMessage('')
    setData({})
  }

  return (
    <div className='app'>
      <Header /> 
      <Input 
          value={location}
          onChange={onChange} 
          searchLocation={searchLocation}
          message={errorMessage}
      />
      <Top data={data}/>
      <Bottom data={data}/>
      <Footer />
    </div>
  );
}

export default App;
