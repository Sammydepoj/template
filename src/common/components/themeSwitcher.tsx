/* eslint-disable @typescript-eslint/no-explicit-any */
import { Switch } from "antd";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../store";

const ThemeSwitcher: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
  const SetDark = (text: string) => {
    setThemeMode(text);
    localStorage.setItem("theme", text);
  };
  const element = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSytemTheme = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && systemTheme.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [element.classList, systemTheme.matches]);

  useLayoutEffect(() => {
    handleSytemTheme();
  }, [handleSytemTheme, themeMode, dispatch, element.classList]);

  useEffect(() => {
    switch (themeMode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        dispatch(setTheme(themeMode));
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        dispatch(setTheme(themeMode));
        break;
      case "system":
        systemTheme.matches
          ? element.classList.add("dark")
          : element.classList.remove("dark");
        localStorage.removeItem("theme");
        dispatch(setTheme(themeMode));
        break;
      default:
        break;
    }
  }, [
    themeMode,
    dispatch,
    element.classList,
    handleSytemTheme,
    systemTheme.matches,
  ]);

  systemTheme.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <Switch
      checkedChildren={"Dark"}
      onChange={() => SetDark(themeMode === "dark" ? "light" : "dark")}
      unCheckedChildren={"Light"}
      className="bg-[#717171]"
      checked={themeMode === "dark" ? true : false}
    />
  );
};

export default ThemeSwitcher;
