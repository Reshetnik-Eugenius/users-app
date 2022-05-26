export interface IUser {
    id:	number,
    name:	string,
    username: string,
    email:	string,
    address: {	
        street:	string,
        suite:	string,
        city:	string,
        zipcode:	string,
        geo: {	
            lat:	string,
            lng:string,
        }
    },
    phone:string,
    website:	string,
    company: {	
        name:	string,
        catchPhrase:string,
        bs:string,
    }
}

export interface IUserPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IUserAlbum {
    userId: number,
    id: number,
    title: string
}

export interface IUserTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IPostComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
export interface IAlbumPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}