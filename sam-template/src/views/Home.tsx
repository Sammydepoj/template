import ThemeSwitcher from "../common/components/themeSwitcher";
const Home = () => {
  return (
    <div className="min-h-[100svh] dark:bg-[#121212] bg-white">
      <ThemeSwitcher />
      <p className="dark:text-white">Welcome</p>
    </div>
  );
};

export default Home;
