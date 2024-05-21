'use client'

import { createTask } from "@/actions/testActions"
import { useFormState, useFormStatus } from "react-dom";

const ServerActionsPage = () => {
    const taskId = 1;
    const createTaskId =  createTask.bind(null, taskId) // bind()でformに存在しないdataをSAに渡す
    const initialState = { error: ''};
    const [state, formAction ] =  useFormState(createTaskId, initialState);

    const SubmitButton = () => {
      const { pending } = useFormStatus();
      return (
        <button type='submit' disabled={pending} className='bg-sky-200 disabled:bg:gray-300 ml-2 px-2 rounded-md'>
          送信
        </button>
      );
    }

  return (
    <div>
      <form action={formAction} className='mt-2 flex items-center justify-center'>
        <input type="text" name="name" id="name" className='bg-gray-300 rounded-md'/>
        <SubmitButton />
      </form>
      <div>{state.error}</div>
    </div>
  )
}

export default ServerActionsPage
