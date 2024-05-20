
const TaskLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className='bg-red-300'>
        <div>
        タスクレイアウト
        </div>
      {children}
    </div>
  );
}

export default TaskLayout
