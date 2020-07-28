import userResolvers from "../resolvers/user";
import messageResolvers from "../resolvers/message";
import { GraphQLDateTime } from "graphql-iso-date";

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, userResolvers, messageResolvers];
