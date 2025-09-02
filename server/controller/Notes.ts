import Notes from "../model/Notes";
import { Request, Response } from "express"
import Users from "../model/User";
export const CreateNotes = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body
    const users = (req as any).user
    try {
        await Notes.create({
            notes: text.text,
            cerateUser: users.id
        })
        res.json({
            success: true,
            message: "Notes Created"
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Notes Created"
        })

    }
}
export const finAllNotes = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = (req as any).user
        if(!!users.id){
            const data = await Notes.find({ cerateUser: users.id }).populate("cerateUser")

        res.json({
            success: true,
            message: "Notes Created",
            NotesData: data
        })
        if (!users) {
            res.json({
                success: false,
                message: "User Not Autherised"
            })
        }
        }else{
            return 
        }

    } catch (error) {
        console.log(error)
        res.json({
            suceess: false,
            message: "Notes Created"
        })

    }
}


export const Hnadledelted = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        await Notes.findByIdAndDelete(id)
        return res.json({
            success: true,
            message: "Delete SuccessFull"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Error To Deleted Notes"
        })
    }
}