import Help from "./Pages/Help";
import './App.css';

const metas = [
  {
    id: "e1",
    image: "./images/message-question.png",
    
  },
  {
    id: "e2",
    image: "./images/setting-2.png",
    
  },
  {
    id: "e3",
    image: "./images/grid-3.png",
    
  },
  {
    id: "e4",
    image: "./images/shield-tick.png",
   
  },
  {
    id: "e5",
    image: "./images/receipt-edit.png",
    
  },
  {
    id: "e6",
    image: "./images/empty-wallet.png",
    
  },
  {
    id: "e7",
    image: "./images/messages-3.png",
    
  },
]




function App() {
  return (
    <div className="App">
   <Help metas={metas}/>
    </div>
  );
}

export default App;
