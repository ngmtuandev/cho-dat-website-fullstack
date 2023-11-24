import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import ClientLayout from "./layout/ClientLayout";
import { Home } from "./pages/client/index";
import { Intro, Login, ProductSell } from "./components";
import useAppStore from "./store/useAppStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  type TApp = {
    isShowModel: boolean;
  };

  const { isShowModel } = useAppStore() as TApp;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="">
        {isShowModel && <Login></Login>}
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
            <Route path={path.INTRO} element={<Intro></Intro>} />
            <Route path={path.PRODUCTS} element={<ProductSell></ProductSell>} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
