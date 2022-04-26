import MainMenu from './components/MainMenu/MainMenu';
import './App.sass'
import OurOffer from './components/OurOffer';
import WhyWe from './components/WhyWe/WhyWe';
import WorkList from './components/WorkList';

function App() {
  return (
    <div>
      <MainMenu />
      <OurOffer />
      <WhyWe />
      <WorkList />
    </div>
  );
}

export default App;
