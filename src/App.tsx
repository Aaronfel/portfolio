import About from './components/About';
import Header from './components/Header';
import Knowledge from './components/Knowledge';

export default function App() {
  return (
    <section className='bg-black'>
      <Header />
      <About />
      <Knowledge />
    </section>
  );
}
