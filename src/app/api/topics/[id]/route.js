import { connect } from "mongoose"
import { NextResponse } from "next/server"
import Topic from "../../../../../models/topicModel"

export async function PUT(req, {params}) {
    const {id} = params
    const {newTitle: title, newDescription: description} = req.json()
    await connect()
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "Topic édité"}, {status:200})
}

export async function GET(req, {params}) {
    const {id} = params
    await connect()
    const topic = await Topic.findOne({_id:id})
    return NextResponse.json({topic}, { status: 200})
}