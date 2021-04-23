import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Cards";

ReactDOM.render(
  <>

    <h1 className="heading_style"> List of top 3 Netflix Series in 2021 </h1>



    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title=" A Netflix Original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
      imgsrc="https://wallpaperaccess.com/full/4600591.jpg"
      title=" A Netflix Original series"
      sname="Extracurricular"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
      imgsrc="https://content.vidangel.com/uploads/2019/07/x2LSRK2Cm7MZhjluni1msVJ3wDF.poster.jpg"
      title=" A Netflix Original series"
      sname="Stranger at night"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
  </>,


  document.getElementById('root')
);


