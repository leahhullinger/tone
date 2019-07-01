import React, { Component } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./Response.module.css";
// props: isOpen, onClose,
// Tone Respone
export class ResponseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overallTones: null,
      tonesBySentence: null
    };
  }
  componentDidMount() {
    this.props.result && this.transformResult(this.props.result);
  }

  transformResult = () => {
    const { document_tone, sentences_tone } = this.props.result;
    const overallTones = document_tone.tones.map(tone => tone.tone_name);
    const tonesBySentence = sentences_tone.map(s => {
      const sentence = s.text;
      const tones = s.tones.length
        ? s.tones.map(t => ({
            score: `${t.score * 100}%`,
            name: t.tone_name
          }))
        : null;
      return { sentence, tones };
    });
    this.setState({ overallTones, tonesBySentence });
  };
  render() {
    const { overallTones, tonesBySentence } = this.state;
    return (
      <Modal
        onClose={this.props.onClose}
        title="The overall tone of your text is:"
        subtitle={
          !!overallTones && (
            <>
              {overallTones.map(tone => (
                <div className={styles.tones} key={tone}>
                  <h3>{tone}</h3>
                </div>
              ))}
            </>
          )
        }
        content={
          !!tonesBySentence && (
            <>
              {tonesBySentence.map(s => {
                return (
                  <div className={styles.sentencesWrapper} key={s.sentence}>
                    <div className={styles.toneWrapper}>
                      {!!s.tones &&
                        s.tones.map(tone => {
                          return (
                            <div
                              className={styles.sentenceTone}
                              key={tone.name}
                            >
                              {tone.name}
                            </div>
                          );
                        })}
                    </div>
                    <div className={styles.sentence}>
                      <p>{s.sentence}</p>
                    </div>
                  </div>
                );
              })}
            </>
          )
        }
      />
    );
  }
}

// <div className={styles.modalOverlay}>
//   <div className={styles.model}>
//     <div className={styles.responseHeader}>
//       <h2>The overall tone of your text is: </h2>
//       {toneSummary.tones.map(tones => (
//         <div className={styles.tones} key={tones.tone_id}>
//           <h3>{tones.tone_name}</h3>
//         </div>
//       ))}
//     </div>
//     {sentenceTones.map(sentence => {
//       return (
//         <div
//           className={styles.sentencesWrapper}
//           key={sentence.sentence_id}
//         >
//           <div className={styles.toneWrapper}>
//             {sentence.tones.map(tone => {
//               return <div key={tone.tone_id}>{tone.tone_name}</div>;
//             })}
//           </div>
//           <div className={styles.sentence}>
//             <p>{sentence.text}</p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
