import { createTask } from "@/actions/testActions"

const ServerActionsPage = () => {
    const taskId = 1;
    const createTaskId =  createTask.bind(null, taskId) // bind()でformに存在しないdataをSAに渡す
  return (
    <div>
      <form action={createTaskId} className='mt-2 flex items-center justify-center'>
        <input type="text" name="name" id="name" className='bg-gray-300 rounded-md'/>
        <button type='submit' className='bg-slate-200 ml-2 px-2 rounded-md'>送信</button>
      </form>
    </div>
  )
}

export default ServerActionsPage
