import WorkflowCanvas from "./components/Canvas/WorkflowCanvas";

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h2>HR Workflow Designer</h2>
        <span className="badge">Prototype</span>
      </header>
      <WorkflowCanvas />
    </div>
  );
}

export default App;
