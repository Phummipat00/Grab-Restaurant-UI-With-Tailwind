import e from "express";
import Restaurant from "../models/restaurant.model.js";

const restaurantController = {};
//Create and Save a new restaurant
restaurantController.create = async (req, res) => {
  const { title, type, img } = req.body;
  console.log("Incoming body:", req.body);

  // validate data
  if (!title || !type || !img) {
    res.status(400).send({ message: "Name, Type, or Img can not be empty!" });
    return;
  }

  await Restaurant.findOne({ where: { title: title } }).then((restaurant) => {
    if (restaurant) {
      res.status(400).send({ message: "Restaurant already exists!" });
      return;
    }
    const newRestaurant = {
      title: title,
      type: type,
      img: img,
    };

    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Something error while creating the restaurant",
        });
      });
  });
};

//update
restaurantController.update = async (req, res) => {
  const id = req.params.id; // แก้จาก is เป็น id
  const { name, type, imageUrl } = req.body;

  if (!name && !type && !imageUrl) {
    res.status(400).send({ message: "No fields provided for update" });
    return;
  }

  try {
    const [num] = await Restaurant.update(
      { name, type, imageUrl },
      {
        where: { id: id },
      }
    );

    if (num === 1) {
      res.send({ message: "Update successful" });
    } else {
      res.status(404).send({
        message: `Cannot update Restaurant with id=${id}. Not found.`,
      });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).send({
      message: `Error updating Restaurant with id=${id}`,
      error: error.message,
    });
  }
};

//delete

export default restaurantController;
