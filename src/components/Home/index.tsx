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
          <div className="img-container">
            <img src={ReactLogo} alt="react+ts-logo" />
          </div>
          <div className="text-container">
            <p>
              Aqui planeo subir ejercicios usando React + TypeScript, asi como
              pequeños proyectos hechos con estas tecnologias.
            </p>
            <div>
              <h2>§ Counter</h2>
              <p>Incrementa y decrementa el valor de un contador.</p>
            </div>
            <div>
              <h2>§ Counter with timer</h2>
              <p>Incrementa el valor de un contador con un tiempo limitado.</p>
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
