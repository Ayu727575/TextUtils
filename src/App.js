import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About"/> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text for analyzing" />
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
