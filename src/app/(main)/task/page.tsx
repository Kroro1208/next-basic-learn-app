import { Task } from "@/app/api/tasks/route";

const getAllTasks = async() => {
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'GET',
    cache: 'no-store'
  });

  return await response.json();
}

const TaskPage = async () => {
  const tasks = (await getAllTasks()).tasks as Task[];
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <ul>
            <li>{task.id}: {task.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskPage;
