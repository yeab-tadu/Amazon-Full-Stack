import "./App.css";
import Home from "./Components/Banner/Home";

import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./data_layer/StateProvider";
import { useEffect } from "react";
import { auth } from "./Components/Firebase/firebase";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Pages/Orders/Orders";
import Footer from "./Components/Footer/Footer";
import amazon__logo from "./assets/images.jpg";
import { Helmet } from "react-helmet";
function App() {
  const promise = loadStripe(
    " pk_test_51NwLaaLTbHEBEK3I68pshrmdarMXqgu3kjl7oTJTpIrthAHZ8PcgyQ3HorfYHiPycIw2P7gqhpJQlg9RqvyYucoq00z9jYCEj5"
  );
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Helmet>
        <title>{String.fromCharCode()} Amazon clone</title>
        <link rel="icon" type="image/jpg" href={amazon__logo} />
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>
                404 <br /> Page not found{" "}
              </h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
