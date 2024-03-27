import TSxR192 from 'src/assets/images/TS+React@192.png';
import TSxR256 from 'src/assets/images/TS+React@256.png';
import Card from 'src/assets/styles/components/Card';
import {
  StyledImageContainer,
  StyledTextContainer
} from 'src/assets/styles/components/StyledContainers';

function Home() {
  const srcSet = `${TSxR192} 192w, ${TSxR256} 256w`;
  return (
    <Card>
      <div>
        <h1>Ejercicios con React + TypeScript</h1>
      </div>
      <StyledTextContainer>
        <StyledImageContainer>
          <img
            src={TSxR256}
            alt="react+ts-logo"
            srcSet={srcSet}
            sizes="(max-width: 767px) 192px, 256px"
          />
        </StyledImageContainer>
        <p>
          Esta pagina tiene como objetivo mostrar ejercicios realizados usando
          React + TypeScript.
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
            Incrementa el valor de un contador antes de que acabe el tiempo.
          </p>
        </div>
        <div>
          <h2>§ ToDo App</h2>
          <p>
            Crea una lista de tareas que puedes editar y marcar como
            completadas.
          </p>
          <p>Por defecto guarda las tareas usando indexedDB.</p>
        </div>
      </StyledTextContainer>
    </Card>
  );
}

export default Home;
