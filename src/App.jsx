import { Catalogue } from "./components/Catalogue";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-5 lg:px-20 pt-[68px] md:pt-[83px]">
        <Hero />
        <Catalogue />
        <Services />
      </main>
    </>
  );
}

export default App;
