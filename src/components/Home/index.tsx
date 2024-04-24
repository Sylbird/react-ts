import { ReactxTs_SrcSet } from 'src/assets/images/srcSet';
import Card from 'src/assets/styles/components/Card';
import {
  ImageContainer,
  Container
} from 'src/assets/styles/components/StyledContainers';

function Home() {
  return (
    <Card>
      <h1>Ejercicios con React + TypeScript</h1>
      <Container>
        <ImageContainer>
          <img
            alt="react+ts-logo"
            srcSet={ReactxTs_SrcSet}
            sizes="(max-width: 767px) 192px, 256px"
            style={{ float: 'right' }}
          />
        </ImageContainer>
        <p>
          Esta pagina tiene como objetivo mostrar ejercicios realizados usando
          React + TypeScript.
        </p>
        <section>
          <h2>§ Clock</h2>
          <p>Muestra la fecha y hora.</p>
        </section>
        <section>
          <h2>§ Stopwatch</h2>
          <p>
            Cronometro que cuenta los milisegundos que transcurrieron y los
            convierte a tiempo (Horas, Minutos, Segundos y Milisegundos).
          </p>
        </section>
        <section>
          <h2>§ Counter</h2>
          <p>Incrementa y decrementa el valor de un contador.</p>
        </section>
        <section>
          <h2>§ Counter with timer</h2>
          <p>
            Incrementa el valor de un contador antes de que acabe el tiempo.
          </p>
        </section>
        <section>
          <h2>§ ToDo App</h2>
          <p>
            Crea una lista de tareas que puedes editar y marcar como
            completadas.
          </p>
          <p>Por defecto guarda las tareas usando indexedDB.</p>
        </section>
        <section>
          <h2>§ A.I</h2>
          <p>
            <strong>1. Stable Diffusion:</strong> Crea una imagen a partir de
            una descripción. Usa "Hugging Face API" para cargar el modelo y
            crear la imagen.
          </p>
        </section>
      </Container>
    </Card>
  );
}

export default Home;
