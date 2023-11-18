import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import ClientLayout from "./layout/ClientLayout";
import { Home } from "./pages/client/index";

function App() {
  return (
    <div className="">
      <Routes>
        {/* Client Layout sẽ luôn nằm dưới cùng và những trang con khác sẽ nằm trên :
        trang lồng trang ---- ClientLayout chỉ cần render 1 lần, và nó sẽ chứa những conponent nào dùng chung cho tất cả page 
        ví dụ : topHeader, navigation, Menu
        */}
        <Route
          path={path.CLIENT_LAYOUT}
          element={<ClientLayout></ClientLayout>}
        >
          {/* OUTLET */}
          <Route path={path.HOME} element={<Home></Home>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
