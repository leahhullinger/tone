import React, { Component } from "react";
import axios from "axios";
import { Header } from "./component/Header";
import "./App.css";

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
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="user-input-wrapper">
            <textarea
              rows={10}
              className="user-input"
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <div>
              <button onClick={this.getToneResults}>get results</button>
            </div>
          </div>

          {!!this.state.toneSummary && (
            <div>
              <div>
                <h1>Tone Summary:</h1>
                <p>the text you submitted included these tones: </p>
              </div>
              {this.state.toneSummary.tones.map(tone => (
                <div key={tone.tone_id}>{tone.tone_name}</div>
              ))}
              {this.state.sentenceTones.map(sentence => {
                return (
                  <div key={sentence.sentence_id}>
                    <div>{sentence.text}</div>
                    <div>{sentence.tones}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
