import Home from "./pages/Home";

function App() {
  const path = window.location.pathname;

  switch (path) {

    case "/reserva":
      window.location.href = "https://casa.xapolo.com";
      return null;

    default:
      return <Home />;
  }
}

export default App;