import React, { Component } from 'react'
import axios from 'axios';

export default class About extends Component {
  async componentDidMount(){
    let {data} = await axios.get(`https://www.worldcoinindex.com/apiservice/v2getmarkets?key=8D7Dru55Wchzwh6Ayam08j9LyLGuJs&fiat=btc`)
    console.log(data, ' is data')
  }
  render() {
    return (
      <div>
        Hi from About page
        <ul>
          
        </ul>
      </div>
    )
  }
}
