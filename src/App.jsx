import { Catalogue } from "./components/Catalogue";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <main className="font-exo flex flex-col justify-center">
        <Hero />
        <Catalogue />
        <Services />
      </main>
    </>
  );
}

export default App;
