import bcrypt from "bcrypt";
import appDataSource from "../data-source";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";

export class UserService {

    // Récupération du repository pour l'entité User depuis la source de données de l'application
    private userRepository = appDataSource.getRepository(User);

    // Création de compte
    async signup(email: string, password: string) {
        console.log("UserService - Sign up");

        // Hachage du mot de passe avec bcrypt (hachage en 10 tours)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création d'un nouvel utilisateur avec l'email et le mot de passe haché
        const newUser = this.userRepository.create({
            email: email,
            password: hashedPassword
        });
        return await this.userRepository.save(newUser);
    };

    // connection
    // async login(email: string, password: string) {
    //     console.log("UserService - login");

    //     // Recherche de l'utilisateur dans la base de données par son email
    //     const user = await this.userRepository.findOneBy({ email: email });

    //     // Vérification de l'existence de l'utilisateur et retourne null si non trouvé
    //     if (!user) {
    //         return null;
    //     }

    //     // Vérification de la validité du mot de passe en comparant le mot de passe haché stocké avec celui fourni
    //     const isPasswordValid = await bcrypt.compare(password, user.password);

    //     // Si le mot de passe n'est pas valide, retourne null
    //     if (!isPasswordValid) {
    //         return null;
    //     }

    //     // Création d'un jeton JWT contenant l'identifiant (id) et l'email de l'utilisateur
    //     const token = jwt.sign(
    //         { id: user.id, email: user.email },
    //         process.env.JWT_SECRET, // Clé secrète utilisée pour signer le jeton JWT
    //         { expiresIn: "2h" } // Durée de validité du jeton (2 heures)
    //     );
    //     return token;
    // }
}
