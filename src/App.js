import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main';



function App(props) {

  return (
    <div className="App">
      <Header />
      <Main bookData={props.bookData}/>
      <Footer />
    </div>
  );
}

export default App;
