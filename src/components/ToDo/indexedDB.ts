import { useEffect } from 'react';
import { TaskProps } from 'src/components/ToDo/types';

const InitialTasks: TaskProps[] = [
  {
    id: crypto.randomUUID(),
    checked: true,
    text: 'Guardar el estado de las tareas en indexedDB.'
  },
  {
    id: crypto.randomUUID(),
    checked: false,
    text: 'Permitir la exportacion/importacion de las tareas.'
  }
];

export const useSyncToIndexedDB = (
  firstRender: React.MutableRefObject<boolean>,
  tasks: TaskProps[],
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
) => {
  useEffect(() => {
    let dbIsNew = false;
    const request = window.indexedDB.open('todo-db', 1);
    request.onerror = (event) => {
      console.error('Failed to open IndexedDB:', event);
    };

    // if this is the first time the database is created: `onUpgrade` is activated first and `onSuccess` later
    request.onupgradeneeded = () => {
      const db = request.result;
      dbIsNew = true;
      db.createObjectStore('tasks', { autoIncrement: true });
    };

    // if db already exists onSuccess is `triggered` and `onUpgrade` is ignored
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction('tasks', 'readwrite');
      const store = transaction.objectStore('tasks');
      if (dbIsNew) {
        firstRender.current = false;
        setTasks(InitialTasks);
      } else {
        if (firstRender.current === true) {
          store.getAll().onsuccess = (event) => {
            const request = event.target as IDBRequest<TaskProps[]>;
            const data = request.result;

            firstRender.current = false;
            setTasks(data);
          };
        } else {
          store.getAll().onsuccess = (event) => {
            const request = event.target as IDBRequest<TaskProps[]>;
            const data = request.result;
            if (JSON.stringify(data) !== JSON.stringify(tasks)) {
              store.clear();
              tasks.forEach((task) => {
                store.add({
                  id: task.id,
                  checked: task.checked,
                  text: task.text
                });
              });
            }
          };
        }
      }
    };
  }, [firstRender, tasks, setTasks]);
};
