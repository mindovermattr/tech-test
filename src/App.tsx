import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import { ProductProvider } from "./context/ProductContext/ProductContext";
import { SelectProvider } from "./context/SelectContext/SelectContext";

function App() {
  return (
    <SelectProvider>
      <ProductProvider>
        <Layout>
          <Header />
          <main>
            <Shop />
          </main>
        </Layout>
      </ProductProvider>
    </SelectProvider>
  );
}

export default App;
