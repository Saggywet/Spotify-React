import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID: {type: String, required: true},
    receiverId: {typer: String, required: true},
    content: {type: String, required: true},
}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema);