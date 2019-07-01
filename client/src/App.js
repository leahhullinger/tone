import React, { Component } from "react";
import axios from "axios";
import { Header } from "./component/Header/Header";
import "./App.css";
import keyboardIMG from "./keyboard-498396_1920.jpg";
import { Button } from "./component/Button/Button";
import { TextArea } from "./component/TextArea/TextArea";
import { Modal } from "./component/Modal/Modal";
import { ResponseModal } from "./component/Response/Response";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLoading: false,
      userInput: "",
      result: null
    };
  }

  onOpenModal;
  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  getToneResults = () => {
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:3005/api/tone-request", {
        userText: this.state.userInput
      })
      .then(response => {
        console.log(response);
        this.setState({
          isLoading: false,
          isOpen: true,
          result: response.data
        });
      })
      .catch(error => {
        console.log("there was an error", error);
      });
  };

  render() {
    console.log("sentence tones", this.state.sentenceTones);
    return (
      <div className="App">
        {!!this.state.isOpen && this.state.result && (
          <ResponseModal
            onClose={() => this.setState({ isOpen: false })}
            result={this.state.result}
          />
        )}
        <Header />
        <div className="content">
          <div className="wrapper">
            <h2 className="description">Your words say a lot about you.</h2>
          </div>
          <div className="inputWrapper">
            <TextArea
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <Button onClick={this.getToneResults} btnText="Check Your Tone" />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default App;
