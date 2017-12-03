import Realm from 'realm';
import SettingModel from './SettingModel';
import PassageModel from './PassageModel';


export const repository = () => {
    return new Realm({
        schema: [
            SettingModel,
            PassageModel
        ]
    })
}