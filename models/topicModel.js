import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timeStamps: true,
    }
)

//En cas où le model existe déjà
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)

export default Topic