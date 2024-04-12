import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

// Création d'une nouvelle instance du contrôleur UserController
const userController = new UserController();

// Routes

// Route POST pour l'inscription d'un nouvel utilisateur
userRouter.post("/signup", (req, res) => {
    console.log("UserRouter");
    userController.signup(req, res);
});

// Route POST pour la connexion d'un utilisateur existant
// userRouter.post("/login", (req, res) => {
//     userController.login(req, res);
// });

export default userRouter;

