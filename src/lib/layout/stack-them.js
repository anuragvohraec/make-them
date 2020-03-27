import { LitElement, html, css } from "lit-element";


const _allowedFlexValue = new Set(['flex-start','flex-end', 'center', 'space-around', 'space-between','stretch','base-line']);


export class StackThem extends LitElement{

    constructor(flexDirection){
        super();
    }


    static get styles(){
        return css`
.container{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    direction: column;
    justify-content: center;
	align-items: center;
}
::slotted(div){
    position: absolute;
}
        `;
    }

    render(){
        return html`
<div class="container">
    <slot></slot>
</div>
`;
    }

}

