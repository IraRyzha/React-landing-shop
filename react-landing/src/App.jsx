import Layout from "./components/common/Layout";
import GradientBottom from "./components/GradientBottom";
import GradientTop from "./components/GradientTop";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <Layout>
      <GradientTop />
      <MainPage />
      <GradientBottom />
    </Layout>
  );
}

export default App;
