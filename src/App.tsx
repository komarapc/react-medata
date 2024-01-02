import "./App.css";

import { Helmet } from "react-helmet";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>React App MetaData</title>
        <meta name="description" content="Hello There Good Morning" />
        <meta property="og:url" content="https://react-medata.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Title Content" />
        <meta property="og:description" content="Hello There" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/45bca4ba-2d02-4f5e-94aa-6f64fcf78926.jpg?token=AMWIPvDviWvP90KyvJ1wG0o5HFVrMcV3_FLg-i23iqo&height=675&width=1200&expires=33240196487"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="react-medata.vercel.app" />
        <meta
          property="twitter:url"
          content="https://react-medata.vercel.app/"
        />
        <meta name="twitter:title" content="Title Content" />
        <meta name="twitter:description" content="Hello There" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/45bca4ba-2d02-4f5e-94aa-6f64fcf78926.jpg?token=AMWIPvDviWvP90KyvJ1wG0o5HFVrMcV3_FLg-i23iqo&height=675&width=1200&expires=33240196487"
        />
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
