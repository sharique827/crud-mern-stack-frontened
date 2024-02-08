import './App.css';
import Main from './Components/Main';
import CreateContextProvider from './Store/CreateContextProvider';

function App() {
  return (
   <>
   <CreateContextProvider>
   <Main/>
   </CreateContextProvider>
   </>
  );
}

export default App;
