import mongoose from "mongoose";
import {Contact} from "../types.ts";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nombre: {type: String, required: true},
    telefono: {type: String, required: true, unique: true},
    pais: {type: String},
    
})

export type ContactModelType = mongoose.Document & Omit<Contact, "id">;
export const ContactModel = mongoose.model<ContactModelType>("Contact", contactSchema);