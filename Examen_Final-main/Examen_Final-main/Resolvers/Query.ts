import {GraphQLError} from "graphql";
import {ContactModelType, ContactModel} from "../db/Contact.ts";
import hora_pais from "../lib/get_hora.ts";
import mongoose from "mongoose";

export const Query = {
    getContact: async(_: unknown, args: {id: string}):Promise<ContactModelType> => {
        try{
        
            const {id} = args;

            if(!mongoose.isValidObjectId(id)){throw new Error("Introduce un id de Mongoose valido");}

            const contacto = await ContactModel.findById(id);
       
            if(!contacto){throw new GraphQLError (`No se ha encontrado el contacto con el id ${id}`);}
        
    
        return contacto;

    }
    catch(e){
        throw new GraphQLError(e);
    }
    },

    getContacts: async():Promise<ContactModelType[]> => {
        try{
            const contactos = await ContactModel.find();

            return contactos;

        }catch(e){
            throw new GraphQLError(e);
        }
    },


}