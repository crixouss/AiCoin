import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/chat", { prompt }).then((response) => {
            setResponse(response.data.content);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Chat with AI</h1>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type your prompt here..."
                        rows="4"
                        cols="50"
                    />
                    <br />
                    <button type="submit">Send</button>
                </form>
                <div className="response">
                    <h2>Response:</h2>
                    <p>{response}</p>
                </div>
            </header>
        </div>
    );
}

export default App;
