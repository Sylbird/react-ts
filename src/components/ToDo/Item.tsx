import { FC, useState } from 'react';
import { TaskProps } from 'src/components/ToDo/types';

const Item: FC<{
  task: TaskProps;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}> = ({ task, tasks, setTasks }) => {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

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
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
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
    <li>
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
              Actualizar
            </button>
            <button type="button" onClick={() => setEditingTaskId(null)}>
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <label htmlFor={task.id} className={task.checked ? 'slash' : ''}>
            {task.text}
          </label>
          <input name="updateTask" type="text" style={{ display: 'none' }} />
          <div>
            <button type="button" onClick={CreateHandleEdit(task.id)}>
              Editar
            </button>
            <button
              className="danger"
              type="button"
              onClick={createHandleDelete(task.id)}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Item;
