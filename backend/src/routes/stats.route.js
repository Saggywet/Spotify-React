import { Router } from "express";

const router = Router();

router.get("/", (res,req) =>{
    res.setEncoding("Stats route");
});

export default router;