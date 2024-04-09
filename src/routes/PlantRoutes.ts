import { Router } from "express";
import PlantController from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

// Routes
// Get all plants
plantRouter.get("/", (req, res) => {
    console.log("plantRouter");
    plantController.getAll(req, res);
});

// Get plant by id
plantRouter.get("/:id", (req, res) => {
    console.log("plantRouter*");
    plantController.getPlantById(req, res);
});

// plantRouter.get("/:id", plantController.getPlantById);

// create plant
plantRouter.post("/", (req, res) => {
    console.log("plantRouter**");
    plantController.createPlant(req, res);
});

// Update plant by id
plantRouter.patch("/:id", (req, res) => {
    console.log("plantRouter***");
    plantController.updatePlant(req, res);
});

// Delete plant by id
plantRouter.delete("/:id", (req, res) => {
    console.log("plantRouter****");
    plantController.deletePlantById(req, res);
});

export default plantRouter;

