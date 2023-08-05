import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/bar";
import Contacts from "./scenes/contacts";
import Faq from "./scenes/faq";
import Form from "./scenes/form";
import Geography from "./scenes/geography";
import Invoices from "./scenes/invoices";
import Pie from "./scenes/pie";
import Team from "./scenes/team";
import Line from "./scenes/line";
import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className='content'>
            <TopBar ></TopBar>
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/bar" element={<Bar />}/>
              <Route path="/calendar" element={<Calendar />}/>
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/faq" element={<Faq />}/>
              <Route path="/form" element={<Form />}/>
              <Route path="/geography" element={<Geography />}/>
              <Route path="/invoices" element={<Invoices />}/>
              <Route path="/line" element={<Line />}/>
              <Route path="/pie" element={<Pie />}/>
              <Route path="/team" element={<Team />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
