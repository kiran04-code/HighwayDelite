import mongoose from "mongoose";
interface INotes {
    notes:string
    cerateUser:any,
}
const Nootesscehma = new mongoose.Schema<INotes>({
  notes:
    {
    type:String,
    required:true

  }
,
  cerateUser:{
   type:mongoose.Schema.Types.ObjectId,
    require:true
  }
})

const Notes = mongoose.models.Nootes || mongoose.model("Noote",Nootesscehma)

export default Notes