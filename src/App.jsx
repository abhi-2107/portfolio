import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br dark:from-stone-950 dark:to-zinc-900 dark:text-slate-50 from-orange-200 to-cyan-300 text-black min-h-screen font-normal">
        <Navbar />
      </div>
    </>
  );
}

export default App;
