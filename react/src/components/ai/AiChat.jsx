import {useState} from "react";
import axios from "axios";

const AiChat = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            console.log("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        axios.post("http://localhost:8080/chat", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            setResponse(response.data.content);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="container mx-auto px-4 text-white">
            <header className="">
                <h1 className={""}>Analyze Your Coin!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <br />
                    <button type="submit">Upload and Analyze</button>
                </form>
                <div className="response">
                    <h2>Analysis Result:</h2>
                    <p>{response}</p>
                </div>
            </header>
        </div>
    );
}

export default AiChat;