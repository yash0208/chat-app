export class Message {
    _id: string;
    createdAt: Date;
    name: string;
    text: string;

    constructor({data}: {data: any}) {
        this._id = data?.id ?? "";
        this.createdAt = new Date(data?.createdAt ?? new Date());
        this.name = data?.name ?? "";
        this.text = data?.text ?? "";
    }
}