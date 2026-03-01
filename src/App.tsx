import './App.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import Homepage from './Pages /Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      'bright-Sun': [
        '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
        '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d',
      ],
      'mine-shaft': [
        '#fafafa', '#f5f5f5', '#e6e6e6', '#d6d6d6', '#a5a5a5',
        '#767676', '#575757', '#434343', '#2d2d2d', '#1a1a1a', '#0a0a0a',
      ],
    },
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;