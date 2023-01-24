import Navigation from "./components/navigation";
import Header from "./components/header";
import { Main } from "./components/main";

export default function Settings() {
  const hueValues = [];

  for (let i = 327; i >= 0; i -= 60) {
    hueValues.push(i);
  }
  return (
    <>
      <Header />
      <Navigation />
      <Main>Settings</Main>
    </>
  );
}
