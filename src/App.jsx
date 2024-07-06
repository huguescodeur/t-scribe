import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultsPage from "./components/ResultsPage";

function App() {
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />

        <HomePage />
        <ResultsPage />
      </section>
      <Footer />
    </div>
  );
}

export default App;
