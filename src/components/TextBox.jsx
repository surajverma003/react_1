import copy from 'copy-text-to-clipboard';
import React, { useState } from 'react';

function TextBox() {
    let [text, setText] = useState('');

    let textData = (e) => {
        setText(e.target.value);
    }

    let uppercase = () => {
        setText(text.toUpperCase());
    }

    let lowercase = () => {
        setText(text.toLowerCase());
    }

    let alternate = () => {
        let word = text.split('');
        let k = '';

        for (let i = 0; i < word.length; i++) {
            k += (i % 2 === 0) ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        setText(k);
    }

    let clear = () => {
        setText('');
    }

    let copyText = () => {
        copy(text);
        console.log('Copied to Clipboard');
    }

    let speaked = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg)
    }

    let inverse = () => {
        let word = text.split('');
        let k = '';

        for (let i = 0; i < word.length; i++) {
            k += (i % 2 !== 0) ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        setText(k);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-5">
                        <form action="">
                            <h3 className='text-light mb-3'>Text Converter</h3>
                            <textarea onChange={textData} className="form-control bg-dark text-light mb-3" value={text} rows="10" placeholder='Message'></textarea>

                            <input type="button" onClick={uppercase} className="btn btn-primary pb-2 me-2 mb-3" value="Uppercase" />
                            <input type="button" onClick={lowercase} className="btn btn-info pb-2 me-2 mb-3" value="Lowercase" />
                            <input type="button" onClick={alternate} className="btn btn-dark pb-2 me-2 mb-3" value="Alternate" />
                            <input type="button" onClick={inverse} className="btn btn-success pb-2 me-2 mb-3" value="Inverse" />
                            <input type="button" onClick={clear} className="btn btn-warning pb-2 me-2 mb-3" value="Clear" />
                            <input type="button" onClick={copyText} className="btn btn-light pb-2 me-2 mb-3" value="Copy to Clipboard" />
                            <input type="button" onClick={speaked} className="btn btn-danger pb-2 me-2 mb-3" value="Speech" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextBox;
