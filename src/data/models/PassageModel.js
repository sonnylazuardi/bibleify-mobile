import Realm from 'realm';


class PassageModel extends Realm.Object { }
PassageModel.schema = {
    name: "Passage",
    primaryKey: "id",
    properties: {
        id: "string",
        content: "string",
        book: "string",
        chapter: "int",
        verse: "int",
        type: "string"
    }
}

export default PassageModel