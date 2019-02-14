import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PubNubReact from 'pubnub-react';
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props) {
    super(props);

    this.pubnub = new PubNubReact({
      publishKey: "pub-c-0f5f3a5f-0779-4229-8a66-5d349afe5aa8",
      subscribeKey: "sub-c-6e28f7f2-2ff0-11e9-979e-6e9033221872"
    })
    this.pubnub.init(this);

    this.state = {
      headerText: "Button Pressed",
      clickCount: 0,
      isBulbOn: true,
    }

    // componentWillMount(){
    //   this.pubnub.subscribe({
    //     channels: ["Default"],
    //     withPresence: true
    //   });

    //   this.pubnub.getMessage("Default", (msg) => {
    //     console.log(msg);
    //   });

    //   this.pubnub.getStatus((st) => {
    //     this.pubnub.publish({
    //       message: "hello world from react",
    //       channel: "Default"
    //     });
    //   });
    // }

  }
  render() {
    console.log("Hello World!")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.headerText + this.state.clickCount}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            The quick brown fox
          </a>
          <Button
            onClick={() => {
              console.log("Button Pressed");
              this.setState({
                clickCount: this.state.clickCount + 1,
              });

              console.log(this.state.clickCount);
            }}
            variant="contained"
            color="primary">
            "Press Me!"
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
