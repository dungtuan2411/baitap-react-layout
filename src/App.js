// import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Carousel />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
