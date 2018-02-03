import Realm from "realm";
import PassageModel from "./PassageModel";

export const repository = path => {
  return new Realm({
    schema: [PassageModel],
    path
  });
};
