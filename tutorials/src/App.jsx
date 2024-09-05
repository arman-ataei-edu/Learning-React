import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import FavCountryContext from "./scripts/FavCountryContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrintChapter from "./router/PrintChapter";
import CountryDetails from "./pages/CountryDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const favCountries = useState(new Set());

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <FavCountryContext.Provider value={favCountries}>
          <Navbar />
          <Routes>
            <Route path="/:chapter/:countryName" element={<CountryDetails />} />
            <Route path="/:chapter" element={<PrintChapter />} />
            <Route path="/" element={<Home />} />
            {/* </Route> */}
          </Routes>
        </FavCountryContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(React.createElement(App));
// root.render(App());
root.render(<App />);
