import React from 'react';
import axios from 'axios';
import configData from "../config.json";

class CarouselText extends React.Component {

  constructor(props) {
    super(props);
    var today = new Date();
    var hours = today.getHours() > 12 ? (today.getHours() - 12) : today.getHours();
    var median = today.getHours() >= 12 ? 'PM' : 'AM';
    var time = (hours < 10 ? ('0' + hours) : hours) + ':' + (today.getMinutes() < 10 ? ('0' + today.getMinutes()) : today.getMinutes());
    this.state = {
      currentTime: time,
      median: median,
      date: today.toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" })
    }
    this.fetchTime();
    // this.fetchTemp();
  }

  componentDidMount() {
    console.log(this.state.tempData);
    if(this.state.tempData == null){
      axios.get(configData['weather-server-url'])
      .then(res => {
        const resData = res.data;
        console.log(resData);
        this.setState({ tempData: resData });
      }
      )
    }
  }

  fetchTime() {
    setInterval(() => {
      var today = new Date();
      var hours = today.getHours() > 12 ? (today.getHours() - 12) : today.getHours();
      var median = today.getHours() >= 12 ? 'PM' : 'AM';
      var time = (hours < 10 ? ('0' + hours) : hours) + ':' + (today.getMinutes() < 10 ? ('0' + today.getMinutes()) : today.getMinutes());
      this.setState({ currentTime: time, median: median, date: today.toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" }) });
    }, 1000)
  }





  render() {
    const myElement =
      <div className='content-box img-gradient'>
        <div className='description-box'>
          {this.props.people.length > 0 &&
            <p>People:
              {this.props.people.map((name, index) =>
              (
                <span key={index}>{name}, </span>
              )
              )}
            </p>
          }
          <p id='date-string'>{this.state.date}</p>
        </div>
        <div className='time-box'>
          <p id='time'>{this.state.currentTime} <span className='unit'>{this.state.median}</span></p>
          {this.state.tempData ? <p id='temp'><span className="material-symbols-outlined">
            sunny
          </span> {this.state.tempData.currentConditions.temp} <span className='unit'>°C</span></p> : null}
        </div>
      </div>;
    return myElement;
  }
}

export default CarouselText;
