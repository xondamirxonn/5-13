import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
function App() {
  return (
    <div>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
