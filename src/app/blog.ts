export class blog{
  blogTitle:String;
  blogContent:String;
  blogCategory:String;
  dateCreated:Date
  blogRating:number;
  blogUserID:number;

  constructor(newBlogObject:Object){
    Object.assign(this,newBlogObject);
  }
}
