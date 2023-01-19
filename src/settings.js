import Navigation from "./components/navigation";
import Header from "./components/header";

export default function Settings() {
  const hueValues = [];

  for (let i = 327; i >= 0; i -= 60) {
    hueValues.push(i);
  }
  return (
    <>
      <Header />
      <Navigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-xl mb-6">Settings</div>
        </div>
      </main>
    </>
  );
}
