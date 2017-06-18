import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
    // uses localstorage, consider a fallback to cookie?
    private _localStorage;
    constructor() {
        if (!localStorage) {
            alert("暂不支持此浏览器");
        }
        this._localStorage = localStorage;
    }

    set(key: string, value: string | Object) {
        let _value: string = "";
        if ((typeof value) != 'string') {
            _value = JSON.stringify(value);
            this._localStorage['_object_' + key] = _value;
            delete this._localStorage['_string_' + key];
        } else {
            _value = value.toString();
            this._localStorage['_string_' + key] = _value;
            delete this._localStorage['_object_' + key];
        }
    }

    get(key: string) {
        try {
            return this._localStorage['_string_' + key] || JSON.parse(this._localStorage['_object_' + key]);
        } catch (e) {
            return null;
        }
    }

    del(key: string) {
        delete this._localStorage['_string_' + key];
        delete this._localStorage['_object_' + key];
    }
}