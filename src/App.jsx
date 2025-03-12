import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br dark:from-stone-950 dark:to-zinc-900 dark:text-slate-50 from-orange-50 to-cyan-50 text-slate-700 min-h-screen font-normal px-3  sm:px-5 container mx-auto">
        <Navbar />
        <Herosection />
        <Skills />
      </div>
    </>
  );
}

export default App;
