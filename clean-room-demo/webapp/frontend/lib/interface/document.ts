export interface IDocument {
    properties: IDocumentProperties,
    description: string,
    sharedWith: ISharedWith[],
    tags: string[],
    comments:IComment[]
}

export interface IDocumentProperties {
    id: string,
    filename: string,
    type: string,
    ledger: string,
    size: string,
    created: string
}

export interface ISharedWith {
    username: string,
    name: string
}

export interface IComment {
    id: number,
    name: string,
    date: Date,
    body: string
}