import { Request, Response } from "express";
import PlantService from "../services/PlantService";

class PlantController {
    private plantService = new PlantService();

    // Requests
    // Get all plants
    async getAll(req: Request, res: Response) {
        console.log("PlantController");
        try {
            const plants = await this.plantService.getAll();
            res.send({ status: "OK", data: plants });
        } catch {
            res.status(500).send({ status: "Failed", message: Error });
        }
    };

    // Get plants by id
    async getPlantById(req: Request, res: Response) {
        console.log("PlantController*");
        try {
            const plant = await this.plantService.getById(Number(req.params.id));
            res.send({ status: "OK", data: plant });
        } catch {
            res.status(500).send({ status: "Failed", message: Error });
        }
    };

    // Create plant
    async createPlant(req: Request, res: Response) {
        console.log("PlantController**");
        try {
            const plant = await this.plantService.createPlant(req.body);
            res.send({ status: "OK", data: plant });
        } catch {
            res.status(500).send({ status: "Failed", message: Error });
        }
    };

    // Update plant
    async updatePlant(req: Request, res: Response) {
        console.log("PlantController***");
        try {
            const plant = await this.plantService.updatePlant(req.params.id, req.body);
            res.send({ status: "OK", data: plant });
        } catch {
            res.status(500).send({ status: "Failed", message: Error });
        }
    };

    // Delete plants by id
    async deletePlantById(req: Request, res: Response) {
        console.log("PlantController****");
        try {
            const plant = await this.plantService.deletePlant(Number(req.params.id));
            res.send({ status: "OK", data: plant });
        } catch {
            res.status(500).send({ status: "Failed", message: Error });
        }
    };
};

export default PlantController;