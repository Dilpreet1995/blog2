export class user{
  userID:Number;
  userName:String;

  constructor(newUserObject:Object){
    Object.assign(this,newUserObject);
  }
}
