export interface Item {
    id : string,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false
    ) {
        // No need for assigning default values because we have done that in the constructor
    }

    get id(): string { 
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }
}