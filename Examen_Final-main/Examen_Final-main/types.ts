import {ApolloServer, gql} from "@apollo/server";

type Contact = {
    id: String;
    nombre: String;
    telefono: String;
    pais: String;
    hora: String;
}