import { Link } from "react-router-dom";
import video from "../../../assets/aivideos/WidthFormat.mp4"

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Discover the Hidden Value in
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
                    Your Coins
        </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-5xl leading-relaxed">
                Have you ever wondered about the history or value of those old coins lying around your house? With
                CoinGenius, you can turn your curiosity into knowledge. Simply take a picture of any coin, and our
                advanced AI-powered app will instantly analyze it, providing you with detailed information and
                up-to-date market value.
            </p>

            <div className="flex justify-center my-10">
                <Link
                    to="/"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
                >
                    Start Analyzing
                </Link>
                <Link to="/" className="py-3 px-4 mx-3 rounded-md border">
                    About us
                </Link>
            </div>
            <div className="flex mt-10 w-2/3 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                >
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                >
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Hero;