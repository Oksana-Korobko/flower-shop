import Section from './components/Section';
import FlowerList from './components/FlowersList';
import flowers from './flowers.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Section title = "Топ тижня">
        <FlowerList elems = {flowers} />
      </Section>  
      <Section />
    
    </div>
  );
}

export default App;
