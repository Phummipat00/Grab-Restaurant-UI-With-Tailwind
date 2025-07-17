import restaurantController from "../controllers/restaurant.controller.js";
import express from "express";

const router = express.Router();
// POST http://localhost:5000/api/v1/restaurant
router.post("/", restaurantController.create);

router.put("/:id", restaurantController.update);

router.get("/:id", restaurantController.getById);

router.get("/", restaurantController.getAll);

router.delete("/:id", restaurantController.deleteById);

export default router;
