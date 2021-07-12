import './App.css';
import Images from './images.json';
import ImageContainer from './Components/ImageContainer';

function App() {
  return (
    <div className="app">
    <div className="container">
      {
        Images.map(ele => (
          <div key={ele.id} className="wrapper" >
          <ImageContainer
            src={ele.urls}
            thumb={ele.urls.thumb}
            width={ele.width}
            height={ele.height}
            alt={ele.alt_description}
          />
          </div>
        ))
      }
    </div>
    </div>
  );
}

export default App;
