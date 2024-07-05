
import {ContactModelType,ContactModel} from "../db/Contact.ts"

import { GraphQLError } from "graphql";

import { get_hora } from "../lib/get_hora.ts";

export const Contact = {

    hora: async (parent: ContactModelType):Promise<{string}> => {
        try{

            //const hora = await get_hora(parent.pais);

            return "14:33";

        }catch(e){
            throw new GraphQLError(e);
        }
    }
}