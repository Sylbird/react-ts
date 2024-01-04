import StyledHome from 'src/components/Home/StyledHome';
import ReactLogo from 'src/assets/images/react-ts-logo.png';

function Home() {
  return (
    <StyledHome>
      <div className="card">
        <div>
          <h1>Ejercicios con React + TypeScript</h1>
        </div>
        <div className="container">
          <div className="text-container">
            <div className="img-container">
              <img src={ReactLogo} alt="react+ts-logo" />
            </div>
            <p>
              Esta pagina tiene como objetivo mostrar ejercicios realizados
              usando React + TypeScript.
            </p>
            <div>
              <h2>§ Clock</h2>
              <p>Muestra la fecha y hora.</p>
            </div>
            <div>
              <h2>§ Stopwatch</h2>
              <p>
                Cronometro que cuenta los milisegundos que transcurrieron y los
                convierte a tiempo (Horas, Minutos, Segundos y Milisegundos).
              </p>
            </div>
            <div>
              <h2>§ Counter</h2>
              <p>Incrementa y decrementa el valor de un contador.</p>
            </div>
            <div>
              <h2>§ Counter with timer</h2>
              <p>
                Incrementa el valor de un contador antes de que acabe el tiempo
              </p>
            </div>
            <div>
              <h2>§ ToDo App</h2>
              <p>
                Crea una lista de tareas editables y las marca como completadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
