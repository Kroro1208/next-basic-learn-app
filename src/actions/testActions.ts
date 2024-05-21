"use server"

interface FormState {
    error: string;
}

export const createTask = async (taskId: number, state: FormState, formData: FormData) => {
    // DBにtaskを作成
    console.log("タスクを登録しました");
    console.log(formData.get("name"));
    console.log(taskId);

    state.error = 'エラーが発生しました';

    return state;
}