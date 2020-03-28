import { LitElement, html, css } from "lit-element";
import { BaseLayoutEl } from "./baseLayoutEl";


export class StackThem extends BaseLayoutEl{

    constructor(){
        super();
    }

    static get styles(){
        return [
            super.styles,
            css`
            .container{
                width: 100%;
                height: 100%;
                overflow: auto;
            }
            .flex{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: nowrap;
                height: 100%;
                position: relative;
            }
            
            ::slotted(div){
                position: absolute;
            }`
          ];
    }

    render(){
        return html`
<div class="container">
    <div class="flex" id="flex">
        <slot></slot>
    </div>
</div>
`;
    }

}
