import { NextResponse } from "next/server";

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

export const GET = async () => {
    return NextResponse.json({ tasks }, {
        status: 200
    });
};

export const dynamic = 'force-dynamic'; // 常に最新のデータが返されるように