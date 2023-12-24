import { FC, useState } from 'react';
import StyledToDo from 'src/components/ToDo/StyledToDo';

type TaskProps = {
  id: string;
  checked: boolean;
  text: string;
};

const InitialTasks: TaskProps[] = [
  {
    id: crypto.randomUUID(),
    checked: false,
    text: 'Guardar el estado de las tareas en el localStorage o indexedDB'
  },
  {
    id: crypto.randomUUID(),
    checked: false,
    text: 'Mejorar el estilo de la pagina.'
  }
];

const ToDo: FC = () => {
  const [tasks, setTasks] = useState(InitialTasks);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

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

  const CreateHandleEdit = (id: string) => () => {
    const editedTask = tasks.find((task) => task.id === id);
    if (editedTask) {
      const inputIndex = tasks.findIndex((task) => task.id === id);
      const input = document.getElementsByName('updateTask')[
        inputIndex
      ] as HTMLInputElement;

      input.value = editedTask.text;
      setEditingTaskId(id);
    }
  };

  const createHandleDelete = (id: string) => () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((currentTask) => currentTask.id !== id);
    });
  };

  const handleUpdate = (id: string) => () => {
    const editedTask = tasks.find((task) => task.id === id);
    if (editedTask) {
      const inputIndex = tasks.findIndex((task) => task.id === id);
      const input = document.getElementsByName('updateTask')[
        inputIndex
      ] as HTMLInputElement;

      editedTask.text = input.value;
    }
    setEditingTaskId(null);
  };

  const handleCheckBoxChange = (id: string) => () => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: !task.checked
          };
        }
        return task;
      });
    });
  };

  return (
    <StyledToDo>
      <div className="card">
        <div>
          <h2>§ToDo App</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input name="task" id="task" required type="text" />
          <button>AddToDo</button>
          <h3>
            <label htmlFor="task">Tareas Por hacer:</label>
          </h3>
        </form>
        <section>
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <input
                    id={task.id}
                    name="checkBox"
                    type="checkbox"
                    defaultChecked={task.checked}
                    onChange={handleCheckBoxChange(task.id)}
                  />
                  {editingTaskId === task.id ? (
                    <>
                      <label htmlFor={task.id} style={{ display: 'none' }}>
                        {task.text}
                      </label>
                      <input name="updateTask" type="text" />
                      <div>
                        <button type="button" onClick={handleUpdate(task.id)}>
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingTaskId(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <label
                        htmlFor={task.id}
                        className={task.checked ? 'slash' : ''}
                      >
                        {task.text}
                      </label>
                      <input
                        name="updateTask"
                        type="text"
                        style={{ display: 'none' }}
                      />
                      <div>
                        <button
                          type="button"
                          onClick={CreateHandleEdit(task.id)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={createHandleDelete(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </StyledToDo>
  );
};

export default ToDo;
