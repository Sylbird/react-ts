import { FC, useEffect, useState } from 'react';

type Task = {
  checked: boolean;
  text: string;
};

const ToDo: FC = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [editInputValues, setEditInputValues] = useState<string[]>([]);
  let addInputValue = 'a';
  //let editInputValue = '';
  const updatedEditInputValues = [...editInputValues];
  const updatedTasks = [...task];

  const addTask = () => {
    const newTask = { text: addInputValue, checked: false };
    setTask([...task, newTask]);
    setEditInputValues([...editInputValues, addInputValue]);
  };

  const handleCheckboxChange = (index: number) => {
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTask(updatedTasks);
  };

  const handleTaskChange = (index: number) => {
    updatedTasks[index].text = editInputValues[index];
    setTask(updatedTasks);
  };

  const handleTaskDelete = (index: number) => {
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
    updatedEditInputValues.splice(index, 1);
    setEditInputValues(updatedEditInputValues);
  };
  useEffect(() => {
    console.log('Component rendered');
  }, []);

  return (
    <div>
      <h2>ToDo List</h2>
      <input
        id="addToDo"
        type="text"
        placeholder="Add ToDo"
        onChange={(e) => (addInputValue = e.target.value)}
      />
      <button onClick={addTask} type="button">
        Add
      </button>
      <ul>
        {task.map((task, index) => (
          <li key={`task${index + 1}`}>
            <span className="task-dragger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 32 32"
              >
                <path d="M10 6h4v4h-4zM18 6h4v4h-4zM10 14h4v4h-4zM18 14h4v4h-4zM10 22h4v4h-4zM18 22h4v4h-4z" />
              </svg>
            </span>
            <input
              type="checkbox"
              checked={task.checked}
              id={`task${index + 1}`}
              onChange={() => handleCheckboxChange(index)}
            />
            <label
              className={task.checked ? 'slash' : ''}
              htmlFor={`task${index + 1}`}
            >
              {task.text}
            </label>
            <input
              name={`input${index + 1}`}
              type="text"
              onChange={(e) => {
                updatedEditInputValues[index] = e.target.value;
                setEditInputValues(updatedEditInputValues);
              }}
              defaultValue={task.text}
            />
            <button onClick={() => handleTaskChange(index)} type="button">
              Edit
            </button>
            <button onClick={() => handleTaskDelete(index)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
