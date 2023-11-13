// import { ShellRouter } from "./router";
import Title from "./components/Title";
import { Suspense } from "react";
import { Button, Todos } from "./Remotes";

// function App() {
//   return <ShellRouter />;

function App() {
  return (
    <>
      <Title />
      {/* Render Module Federation */}
      <Suspense fallback={<div>Cargando los modulos remotos</div>}>
        <Todos />
        <Button />
      </Suspense>
    </>
  );
}

export default App;
