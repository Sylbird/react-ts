import { FC, useRef, useState } from 'react';
import { ButtonContainer } from 'src/assets/styles/components/StyledContainers';
import { TaskProps } from 'src/components/ToDo/types';

const Item: FC<{
  task: TaskProps;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}> = ({ task, tasks, setTasks }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const handleEdit = (id: string) => () => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit && inputRef.current) {
      inputRef.current.value = taskToEdit.text;
      setEditingTaskId(id);
    }
  };

  const handleDelete = (id: string) => () => {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  };

  const handleUpdate = (id: string) => () => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate && inputRef.current) {
      taskToUpdate.text = inputRef.current.value;

      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          if (task.id === id) {
            return taskToUpdate;
          }
          return task;
        });
      });
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
        onClick={handleCheckBoxChange(task.id)}
      />
      {editingTaskId === task.id ? (
        <>
          <label htmlFor={task.id} style={{ display: 'none' }}>
            {task.text}
          </label>
          <input ref={inputRef} name="updateTask" type="text" />
          <ButtonContainer>
            <button type="button" onClick={handleUpdate(task.id)}>
              Actualizar
            </button>
            <button type="button" onClick={() => setEditingTaskId(null)}>
              Cancelar
            </button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <label htmlFor={task.id} className={task.checked ? 'slash' : ''}>
            {task.text}
          </label>
          <input
            ref={inputRef}
            name="updateTask"
            type="text"
            style={{ display: 'none' }}
          />
          <ButtonContainer>
            <button type="button" onClick={handleEdit(task.id)}>
              Editar
            </button>
            <button
              className="danger"
              type="button"
              onClick={handleDelete(task.id)}
            >
              Eliminar
            </button>
          </ButtonContainer>
        </>
      )}
    </li>
  );
};

export default Item;
