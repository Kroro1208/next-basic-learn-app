import { NextResponse } from "next/server";
import { resolve } from "path";

export interface Task {
    id: number;
    name: string;
}

const tasks: Task[] = [
    {
        id: 1,
        name: "英語学習"
    },
    {
        id: 2,
        name: "筋トレ"
    },
    {
        id: 3,
        name: "料理"
    }
];

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));


export const GET = async () => {
    await sleep(2000);
    return NextResponse.json({ tasks }, {
        status: 200
    });
};

export const dynamic = 'force-dynamic'; // 常に最新のデータが返されるように