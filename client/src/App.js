import React, { Component } from "react";
import axios from "axios";
import { Header } from "./component/Header/Header";
import "./App.css";
import keyboardIMG from "./keyboard-498396_1920.jpg";
import { Button } from "./component/Button/Button";

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
            <textarea
              rows={10}
              className="user-input"
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <Button onClick={this.getToneResults} btnText="Check Your Tone" />

            {!!this.state.toneSummary && (
              <div>
                <div>
                  <p>The overall tone is: </p>
                </div>
                {this.state.toneSummary.tones.map(tones => (
                  <div key={tones.tone_id}>{tones.tone_name}</div>
                ))}
                {this.state.sentenceTones.map(sentence => {
                  return (
                    <div key={sentence.sentence_id}>
                      <div>
                        {sentence.tones.map(tone => {
                          return (
                            <div key={tone.tone_id}>
                              <p>{tone.tone_name}</p>
                              <p>{tone.score}</p>
                            </div>
                          );
                        })}
                        ))}
                      </div>
                      <div>{sentence.text}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
