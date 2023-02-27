import "./App.css";
import Contact from "./components/contact/Contact";
import Customer from "./components/customer/Customer";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
      <Home />
      <Customer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
