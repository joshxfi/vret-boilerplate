/** @jsx jsx */
import React from "react";
import { css, jsx, Global } from "@emotion/react";
import Maid from "css-maid";

const App: React.FC = () => {
  return (
    <div>
      <h1>Vret Boilerplate⚡</h1>
      <a
        href='https://github.com/joshxfi/vret-boilerplate'
        target='_blank'
        rel='noreferrer'
      >
        star this repo!
      </a>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap");

          a {
            color: lime;
          }

          body {
            text-align: left;
            color: #fff;
            background: #081229;
            display: grid;
            place-items: center;
            height: 100vh;
          }
        `}
      />
      <Maid />
    </div>
  );
};

export default App;
