import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import RecipeDetail from "./component/RecipeDetail"
import NoPage from "./component/Nopage"
import SignInPage from "./component/SignIn";
import SignupPage from "./component/Signup";
function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/recipeDetail/:recipeId" element={<RecipeDetail />} />
        <Route exact path="/signin" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
