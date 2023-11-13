import reactLogo from "./assets/react.svg";
import tsLogo from "./assets/typescript.svg";
// import viteLogo from "./assets/vite.svg";

const Title = () => {
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://typescript.org" target="_blank">
          <img src={tsLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS</h1>
    </>
  );
};

export default Title;
