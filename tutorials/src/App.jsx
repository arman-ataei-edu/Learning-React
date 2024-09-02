import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrintChapter from "./pages/PrintChapter";
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
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar key={window.location.pathname} />
        <Routes>
          <Route path="/:chapter/:countryName" element={<CountryDetails />} />
          <Route path="/:chapter" element={<PrintChapter />} />
          <Route path="/" element={<Home />} />
          {/* </Route> */}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(React.createElement(App));
// root.render(App());
root.render(<App />);
