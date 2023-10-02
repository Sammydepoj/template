import { ThemeConfig } from "antd";

export const getThemeConfig = (state: string): ThemeConfig | undefined => {
  return {
    token: {
      colorPrimary: state === "dark" ? "" : "",
    },
    components: {},
  };
};
