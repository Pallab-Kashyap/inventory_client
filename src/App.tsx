import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Signup from "./pages/authPages/Signup";
import Login from "./pages/authPages/Login";
import Dashboard from "./pages/Dashboard";
import ItemLibrary from "./components/dashboard-components/item-library/ItemLibraryContainer";
import ImageLibrary from "./components/dashboard-components/image-library/ImageLibrary";
import EditItem from "./components/dashboard-components/item-library/edit-items/EditItemContainer";
import CategoryLibrary from "./components/dashboard-components/CategoryLibrary";
import OptionLibrary from "./components/dashboard-components/OptionLibrary";
import Layout from "./pages/Layout";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Dashboard />}>
              <Route index element={<Navigate to="/item-library" replace />} />
              <Route path="/item-library" element={<ItemLibrary />} />
              <Route path="/image-library" element={<ImageLibrary />} />
              <Route path="/category-library" element={<CategoryLibrary />} />
              <Route path="/option-library" element={<OptionLibrary />} />
            </Route>
            <Route path="/item/:id" element={<EditItem />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
