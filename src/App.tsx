import About from './components/About';
import Header from './components/Header';

export default function App() {
  return (
    <section className='h-[100vh] w-screen bg-black'>
      <Header />
      <About />
    </section>
  );
}
