import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req:any,res:any,user:any) => {
    res.json(user)
})