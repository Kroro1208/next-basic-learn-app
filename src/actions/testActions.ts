"use server"

export const createTask = async (taskId: number, formData: FormData) => {
    // DBにtaskを作成
    console.log("タスクを登録しました");
    console.log(formData.get("name"));
    console.log(taskId);
}