import ThemeProviderWrapper from "./mui-theme";
import "./index.css";
import RouterProviderWrapper from "./routes/routes";

// components

function App() {
  return (
    <ThemeProviderWrapper>
      <RouterProviderWrapper />
    </ThemeProviderWrapper>
  );
}

export default App;
