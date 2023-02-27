import "./App.css";
import Contact from "./components/contact/Contact";
import Customer from "./components/customer/Customer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import WelcomeImperialTax from './components/welcomeImperialTax/WelcomeImperialTax';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
      <Header/>
      <WelcomeImperialTax/>
      <Home />
      <Customer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
