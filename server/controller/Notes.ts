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
        const user = (req as any).user;

        if (!user || !user.id) {
            res.status(401).json({
                success: false,
                message: "User not authorized",
            });
            return;
        }

        const data = await Notes.find({ cerateUser: user.id }).populate("cerateUser");

        res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            NotesData: data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching notes",
        });
    }
};
export const Hnadledelted = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
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