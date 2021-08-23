import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Prodect from "./components/Prodect";
import Details from "./components/Details";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const data = [
    {
      id: "001",
      name: "APPLE iPhone 12 (Blue, 128 GB)",
      price: "₹72,999",
      imgone: "images/p1.png",
      imgtwo: "images/p011.png",
      imgthree: "images/p111.png",
      p1: "128 GB ROM",
      p2: "15.49 cm (6.1 inch) Super Retina XDR Display",
      p3: "12MP + 12MP | 12MP Front Camera",
      p4: "All Screen OLED Display",
      p5: "Industry-leading IP68 Water Resistance",
    },
    {
      id: "002",
      name: "OPPO Reno6 5G (Aurora, 128 GB)",
      price: "₹29,990",
      imgone: "images/p2.png",
      imgtwo: "images/p022.png",
      imgthree: "images/p222.png",
      p1: "3D Borderless Sense Screen ",
      p2: "Super AMOLED Display",
      p3: "64MP + 8MP + 2MP + 2MP - 32MP Front Camera",
      p4: "4350 mAh battery",
      p5: "Full HD+ Display with 2400x1080 resolution",
    },
    {
      id: "003",
      name: "Realme X7 Max (Asteroid Black, 256 GB)",
      price: "27,999",
      imgone: "images/p3.png",
      imgtwo: "images/p033.png",
      imgthree: "images/p333.png",
      p1: "12 GB RAM | 256 GB ROM",
      p2: "16.33 cm (6.43 inch) Full HD+ Display",
      p3: "64MP + 8MP + 2MP | 16MP Front Camera",
      p4: "4500 mAh Battery",
      p5: "MediaTek Dimensity 1200 Processor",
    },
    {
      id: "004",
      name: "POCO F3 GT (Predator Black, 128 GB)",
      price: "₹28,999",
      imgone: "images/p4.png",
      imgtwo: "images/p044.png",
      imgthree: "images/p444.png",
      p1: "8 GB RAM | 128 GB ROM",
      p2: "16.94 cm (6.67 inch) Full HD+ Display",
      p3: "64MP + 8MP + 2MP | 16MP Front Camera",
      p4: "5065 mAh Lithium-ion Polymer Battery",
      p5: "MediaTek Dimensity 1200 Processor",
    },
    {
      id: "005",
      name: "Mi 11X (Lunar White, 128 GB)",
      price: "₹26,918",
      imgone: "images/p5.png",
      imgtwo: "images/p055.png",
      imgthree: "images/p555.png",
      p1: "6 GB RAM | 128 GB ROM",
      p2: "16.94 cm (6.67 inch) Full HD+ Display",
      p3: "48MP + 8MP + 5MP | 20MP Front Camera",
      p4: "4520 mAh Battery",
      p5: "Qualcomm Snapdragon 870 Processor",
    },
    {
      id: "006",
      name: "APPLE iPhone 11 (Black, 128 GB)",
      price: "₹56,999",
      imgone: "images/p6.png",
      imgtwo: "images/p066.png",
      imgthree: "images/p666.png",
      p1: "128 GB ROM",
      p2: "15.49 cm (6.1 inch)",
      p3: "Liquid Retina HD Display",
      p4: "12MP + 12MP | 12MP Front Camera",
      p5: "A13 Bionic Chip Processor",
    },
    {
      id: "007",
      name: "Google Pixel 4a (Just Black, 128 GB)",
      price: "₹31,999",
      imgone: "images/p7.png",
      imgtwo: "images/p077.png",
      imgthree: "images/p777.png",
      p1: "6 GB RAM | 128 GB ROM",
      p2: "14.76 cm (5.81 inch) Full HD+ Display",
      p3: "12.2MP Rear Camera | 8MP Front Camera",
      p4: "3140 mAh Battery",
      p5: "Qualcomm Snapdragon 730G Processor",
    },
    {
      id: "008",
      name: "vivo X60 (Shimmer Blue, 256 GB)",
      price: "₹39,990",
      imgone: "images/p8.png",
      imgtwo: "images/p088.png",
      imgthree: "images/p888.png",
      p1: "2 GB RAM | 256 GB ROM",
      p2: "16.66 cm (6.56 inch) Full HD+ Display",
      p3: "48MP + 13MP + 13MP | 32MP Front Camera",
      p4: ",4300 mAh Lithium-ion Battery",
      p5: "Qualcomm Snapdragon 870 Processor",
    },
    {
      id: "009",
      name: "APPLE iPhone XR (Black, 128 GB)",
      price: "₹46,999",
      imgone: "images/p9.png",
      imgtwo: "images/p099.png",
      imgthree: "images/p999.png",
      p1: "128 GB ROM",
      p2: "15.49 cm (6.1 inch) Display",
      p3: "12MP Rear Camera | 7MP Front Camera",
      p4: "A12 Bionic Chip Processor",
      p5: "Water and Dust Resistant",
    },
    {
      id: "010",
      name: "SAMSUNG Galaxy A71 (Haze Crush Silver, 128 GB",
      price: "₹27,499",
      imgone: "images/p10.png",
      imgtwo: "images/p0100.png",
      imgthree: "images/p0101.png",
      p1: "8 GB RAM | 128 GB ROM ",
      p2: "17.02 cm (6.7 inch) Full HD+ Display",
      p3: "64MP + 12MP + 5MP + 5MP | 32MP Front Camera",
      p4: "4500 mAh Lithium-ion Battery",
      p5: "Qualcomm SM7150 Processor",
    },
    {
      id: "011",
      name: "SAMSUNG Galaxy M51 (Celestial Black, 128 GB)",
      price: "₹25,996",
      imgone: "images/p11.png",
      imgtwo: "images/p0110.png",
      imgthree: "images/p0111.png",
      p1: "8 GB RAM ",
      p2: "128 GB ROM",
      p3: "17.02 cm (6.7 inch) Display",
      p4: "64MP Rear Camera",
      p5: "7000 mAh Battery",
    },
    {
      id: "012",
      name: "Realme X3 SuperZoom (Arctic White, 256 GB)",
      price: "₹26,999",
      imgone: "images/p12.png",
      imgtwo: "images/p0112.png",
      imgthree: "images/p01122.png",
      p1: "12 GB RAM | 256 GB ROM,16.69 cm (6.57 inch)",
      p2: "(6.57 inch) Full HD+ Display",
      p3: "64MP + 8MP + 8MP + 2MP | 32MP + 8MP Dual Front Camera",
      p4: "4200 mAh Battery",
      p5: "Qualcomm Snapdragon 855+ Processor",
    },
  ];
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/prodect">
            <Prodect data={data} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/details/:id">
            <Details data={data} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
