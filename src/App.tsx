/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/react';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      />
    </div>
  );
};

export default App;
