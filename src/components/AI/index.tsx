import Card from 'src/assets/styles/components/Card';
import { Form, Canvas } from 'src/components/AI/Styled';
import { ReactSvg_SrcSet, FileError_SrcSet } from 'src/assets/images/srcSet';
import query from 'src/components/AI/inference';
import {
  DisplayContainer,
  ErrorContainer
} from 'src/assets/styles/components/StyledContainers';
import { useState } from 'react';

const StableDiffusion = () => {
  const [disable, setDisable] = useState(true);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const canvas = document.getElementById('canvas') as HTMLImageElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const textArea = document.getElementById('queryAi') as HTMLTextAreaElement;
    canvas.src = '';
    canvas.srcset = '';
    canvas.srcset = ReactSvg_SrcSet;
    canvas.style.animation = 'spin 5s linear infinite';
    textArea.disabled = true;
    submitBtn.disabled = true;
    setDisable(true);
    setErrorMsg(null);

    query(textArea.value)
      .then((response) => {
        const result = URL.createObjectURL(response);
        canvas.removeAttribute('style');
        textArea.disabled = false;
        submitBtn.disabled = false;
        canvas.srcset = '';
        canvas.src = result;
        setDisable(false);
      })
      .catch((error) => {
        console.log(error);
        canvas.removeAttribute('style');
        textArea.disabled = false;
        submitBtn.disabled = false;
        canvas.srcset = FileError_SrcSet;
        setErrorMsg(error.message);
      });
  };

  const handleDownload = () => {
    const canvas = document.getElementById('canvas') as HTMLImageElement;
    const link = document.createElement('a');
    link.href = canvas.currentSrc;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card title="§ StableDiffusion">
      <DisplayContainer>
        <Canvas>
          <img
            srcSet={ReactSvg_SrcSet}
            alt="AiImage"
            id="canvas"
            sizes="(max-width: 767px) 192px, 256px"
          />
          {errorMsg && <ErrorContainer>{errorMsg}</ErrorContainer>}
        </Canvas>
        <Form onSubmit={handleSubmit}>
          <textarea placeholder="Prompt" rows={2} id="queryAi" required />
          <button id="submitBtn">Create</button>
          <button
            id="downloadBtn"
            type="button"
            onClick={handleDownload}
            disabled={disable}
          >
            Download
          </button>
        </Form>
      </DisplayContainer>
    </Card>
  );
};

export default StableDiffusion;
