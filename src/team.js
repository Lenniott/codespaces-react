import Navigation from "./components/navigation";
import Header from "./components/header";

export default function Team() {
  return (
    <>
      <Header />
      <Navigation />
      <main id="main" className="p-6">
        <div className="max-w-7xl mx-auto">Team Page</div>
      </main>
    </>
  );
}
