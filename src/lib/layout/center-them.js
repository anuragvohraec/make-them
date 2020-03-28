import { BaseLayoutEl } from "./baseLayoutEl.js";


export class CenterThem extends BaseLayoutEl{
    constructor(){
        super("column");
        this.ma="center";
        this.ca="center";
    }

    connectedCallback(){
        super.connectedCallback();
        console.log(this.parentNode.querySelector('.flex'));
    }
}