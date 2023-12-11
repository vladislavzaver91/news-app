import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import { useTheme } from "./helpres/hooks/useTheme";
import Main from "./pages/Main/Main"

const App = () => {
  const { isDark } = useTheme();
  return (
    <div className={`wrap ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
        <Footer />
    </div>
  );
};

export default App
