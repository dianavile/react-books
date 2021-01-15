import Book from './book';
import data from './data.json'; 

function App() {
  const books = data.map(item => <Book key={item.id} title={item.title} author={item.author} />)
    
  return (
    <div>
      {books}  
    </div>
  );
 }

export default App;



