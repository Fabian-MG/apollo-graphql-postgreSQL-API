import { skip, combineResolvers } from "graphql-resolvers";
import { ForbiddenError } from "apollo-server";

export const isAuthenticated = (parent, args, { me }) => {
  return me ? skip : new ForbiddenError("Not authenticated as user");
};

export const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) => {
    return role === "ADMIN"
      ? skip
      : new ForbiddenError("Not authorized as admin");
  }
);

export const isMessageOwner = async (parent, { id }, { models, me }) => {
  const message = await models.Message.findById(id, { raw: true });

  if (message.userId !== me.id) {
    throw new ForbiddenError("Not authenticated as owner");
  }

  return skip;
};
