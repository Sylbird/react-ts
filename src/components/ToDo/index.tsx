import { FC, useRef, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import Item from 'src/components/ToDo/Item';
import StyledToDo from 'src/components/ToDo/StyledToDo';
import { useSyncToIndexedDB } from 'src/components/ToDo/indexedDB';
import { TaskProps } from 'src/components/ToDo/types';

const ToDo: FC = () => {
  const firstRender = useRef(true);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  useSyncToIndexedDB(firstRender, tasks, setTasks);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem('task') as HTMLInputElement;

    const newTask: TaskProps = {
      id: crypto.randomUUID(),
      checked: false,
      text: input.value
    };

    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });

    input.value = '';
  };

  return (
    <Card title="ToDoApp">
      <form onSubmit={handleSubmit}>
        <input name="task" id="task" required type="text" />
        <button>Agregar Tarea</button>
        <h3>
          <label htmlFor="task">Tareas Por hacer:</label>
        </h3>
      </form>
      <StyledToDo>
        <ul>
          {tasks.map((task) => {
            return (
              <Item
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                key={task.id}
              />
            );
          })}
        </ul>
      </StyledToDo>
    </Card>
  );
};

export default ToDo;
