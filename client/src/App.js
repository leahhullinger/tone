import React, { Component } from "react";
import axios from "axios";
import { Header } from "./component/Header/Header";
import "./App.css";
import keyboardIMG from "./keyboard-498396_1920.jpg";
import { Button } from "./component/Button/Button";
import { TextArea } from "./component/TextArea/TextArea";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      toneSummary: null,
      sentenceTones: []
    };
  }

  getToneResults = () => {
    axios
      .post("http://localhost:3005/api/tone-request", {
        userText: this.state.userInput
      })
      .then(response => {
        console.log(response);
        this.setState({
          toneSummary: response.data.document_tone,
          sentenceTones: response.data.sentences_tone
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
          {!!this.state.toneSummary && (
            <div className="responseWrapper">
              <div>
                <div className="responseHeader">
                  <h2>The overall tone of your text is: </h2>
                  {this.state.toneSummary.tones.map(tones => (
                    <div className="tones" key={tones.tone_id}>
                      <h3>{tones.tone_name}</h3>
                    </div>
                  ))}
                </div>
                {this.state.sentenceTones.map(sentence => {
                  return (
                    <div
                      className="sentencesWrapper"
                      key={sentence.sentence_id}
                    >
                      <div className="toneWrapper">
                        {sentence.tones.map(tone => {
                          return <div key={tone.tone_id}>{tone.tone_name}</div>;
                        })}
                      </div>
                      <div className="sentence">
                        <p>{sentence.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      // </div>
    );
  }
}

export default App;
