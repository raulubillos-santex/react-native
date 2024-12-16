 export default class Category {
    id: string;
    title: string;
    color: string;

    constructor(id:string, title:string, color:string){
        this.id = id;
        this.color = color;
        this.title = title;
    }
 }