import { Request, Response } from "express";
import { UserService } from "../services/UserService";

// Déclaration de la classe UserController
export class UserController {

    // import service 
    private userService = new UserService();

    // Création de compte
    async signup(req: Request, res: Response) {
        console.log('user controller')
        // Extraction des champs 'email' et 'password' depuis le corps (body) de la requête
        const { email, password } = req.body;

        // Appel de la méthode signup du service userService avec les informations d'email et de mot de passe
        const createUser = await this.userService.signup(email, password);

        // Vérification du succès de la création de l'utilisateur
        if (createUser) {
            res.status(201).json({ message: "User created" });
        } else {
            res.status(500).json({ message: "Failed to create" });
        };
    };

    // // connection
    // async login(req: Request, res: Response) {
    //     // Extraction des champs 'email' et 'password' depuis le corps (body) de la requête
    //     const { email, password } = req.body;

    //     // Appel de la méthode login du service userService avec les informations d'email et de mot de passe
    //     const token = await this.userService.login(email, password);

    //     // Vérification du succès de la connexion et récupération du token
    //     if (token) {
    //         res.status(200).json({ token: token });
    //     } else {
    //         res.status(401).json({ message: "Failed login" });
    //     };
    // };
};