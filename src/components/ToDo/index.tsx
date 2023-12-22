import { FC, useState } from 'react';

type TaskProps = {
  id: string;
  checked: boolean;
  text: string;
};

const InitialTasks: TaskProps[] = [
  {
    id: crypto.randomUUID(),
    checked: false,
    text: 'First ToDo'
  },
  {
    id: crypto.randomUUID(),
    checked: false,
    text: 'Second ToDo'
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
    <div>
      <h2>§ToDo</h2>
      <form onSubmit={handleSubmit}>
        <input name="task" required type="text" />
        <button>AddToDo</button>
      </form>
      <section>
        <h3>TODO:</h3>
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
                    <label style={{ display: 'none' }}>{task.text}</label>
                    <input name="updateTask" type="text" />
                    <button type="button" onClick={handleUpdate(task.id)}>
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingTaskId(null)}
                    >
                      Cancel
                    </button>
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
                    <button type="button" onClick={CreateHandleEdit(task.id)}>
                      Edit
                    </button>
                    <button type="button" onClick={createHandleDelete(task.id)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ToDo;
