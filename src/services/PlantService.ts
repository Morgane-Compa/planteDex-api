import appDataSource from "../data-source";
import { Plant } from "../entities/Plant";

class PlantService {

    // Requests
    // Get all plants
    async getAll() {
        console.log("PlantService");
        return appDataSource.query("SELECT * FROM plants;");
    };

    // Get plant by id
    async getById(id: number) {
        console.log("PlantService*");
        return appDataSource.query(`SELECT * FROM plants WHERE id = ${id};`);
    };

    // create plant
    async createPlant(plant: Plant) {
        console.log("PlantService**");
        return appDataSource.query(
            `INSERT INTO plants (nom, soleil, arrosage, categorie, image) VALUES ('${plant.nom}', '${plant.soleil}', ${plant.arrosage}, '${plant.categorie}', '${plant.image}');`
        );
    };

    // Update plant
    async updatePlant(id: string, plant: Plant) {
        console.log("PlantService***");
        return appDataSource.query(
          `UPDATE plants SET nom = '${plant.nom}', soleil = '${plant.soleil}', arrosage =  ${plant.arrosage}, categorie = '${plant.categorie}', image = '${plant.image}' WHERE id = ${id};`
        );
      };

    // Delete Plant
    async deletePlant(id: number) {
        console.log("PlantService****");
        return appDataSource.query(`DELETE FROM plants WHERE id = ${id};`);
    };
};

export default PlantService;