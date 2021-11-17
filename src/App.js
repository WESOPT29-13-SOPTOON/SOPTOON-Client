function App() {
  return (
    <div className="App">
      <Button>hey</Button>
    </div>
  );
}

function Button(props) {
  return <button>{props.children}</button>;
}

export default App;
