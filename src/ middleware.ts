import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    console.log('ミドルウェアを通過しました');

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/task'
    ]
}