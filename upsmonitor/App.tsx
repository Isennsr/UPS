import Welcome from 'components/Welcome';
import Battery from 'components/Battery';
import './global.css';

export default function App() {
  return (
    <div className="flex w-full flex-col bg-sky-950">
      <Welcome />
      <section className="mx-2 flex flex-col">
        <Battery number={1} />
        <Battery number={2} />
      </section>
    </div>
  );
}
