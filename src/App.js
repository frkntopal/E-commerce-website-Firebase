import { Route, Routes } from "react-router-dom";
import Auth from "./routes/auth/auth.component";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Auth />} />
      </Route>
    </Routes>
  );
}
export default App;
