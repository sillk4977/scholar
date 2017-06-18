function guid(): string {
  function S4(): string {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export class Erran {
    content: string;
    created_time: Date;
    updated_time: Date;
    checked: boolean = false;
}

export class EventModel {
    id: string;
    name: string;
    errans: Erran[] = [];

    constructor () {
        this.id = guid();
    }
}