import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/Navbar";
import Footer from "../components/Footers/Footer";
import PageNotFound from "../components/PageNotFound/PageNotFound";

// screens
import Home from "../screens/home/Home";

// styles
import "../assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-slate-100">
        <AdminNavbar />
        <main className="container mx-auto">
          <Fragment>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Fragment>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
