import Realm from 'realm';


class SettingModel extends Realm.Object { }
SettingModel.schema = {
    name: 'Settings',
    primaryKey: 'id',
    properties: {
        id: { type: 'string', indexed: true },
        name: "string",
        value: "string"
    }
}

export default SettingModel
