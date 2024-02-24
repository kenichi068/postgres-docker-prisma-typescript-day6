import express from 'express';
import { createUser , getUsers ,getUserById ,updateUser , deleteUser} from '../controllers/userController';

const router = express.Router()

router.post("/", createUser)

router.get("/", getUsers)

router.get("/:userId", getUserById)

router.put("/:userId", updateUser)

router.delete("/:userId", deleteUser)



export default router