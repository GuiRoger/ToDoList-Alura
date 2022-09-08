import React from "react";

export default interface ITaskItem  {
  Title: string;
  RunTime:string;
  Key:number;
  Selected:Boolean;
  Completed:Boolean
  Id:string;
}