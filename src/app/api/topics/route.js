import { connect } from "../../../../config/DB"
import Topic from "../../../../models/topicModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {title,description} = await req.json()
    await connect()
    await Topic.create({ title,description })
    return NextResponse.json({message: "Topic crée"}, {status: 201})
}

export async function GET() {
    await connect()
    const topics = await Topic.find()
    return NextResponse.json({topics});
}