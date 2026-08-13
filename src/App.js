import "./App.CSS";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Khomotso Mabala</small>
        </footer>
      </div>
    </div>
  );
}
