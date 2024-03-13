import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main className="flex flex-row h-screen">
      <Sidebar />
      <Content />
    </main>
  );
}

export default App;
