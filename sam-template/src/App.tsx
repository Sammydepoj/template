import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getThemeConfig } from "./theme.config";
import { ConfigProvider } from "antd";
import { PAGE_ROUTES } from "./utils/constants";
import Home from "./views/Home";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const theme = useAppSelector((state) => {
    return state.theme.value;
  });
  const route = createBrowserRouter([
    {
      path: PAGE_ROUTES.INDEX,
      element: <Home />,
    },
  ]);
  return (
    <ConfigProvider theme={getThemeConfig(theme as string)}>
      <RouterProvider router={route} />
    </ConfigProvider>
  );
};

export default App;
