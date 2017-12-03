import { repository } from '../models/Models';

export function getSettings() {
    var settings = repository().objects('Settings');
    return settings;
}

export function getSetting(id) {
    const setting = repository().objects('Settings').filtered(`id='${id}'`)[0]
    return setting;
}

export function updateSetting(setting) {
    repository().write(() => {
        repository().create('Settings', setting, true)
    })
}