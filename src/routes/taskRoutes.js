const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskControllers");
const verifyToken = require("../middleware/verifyToken");
// Create a new task
router.post("/", verifyToken, taskController.createTask);

// Get a list of all tasks
router.get("/", taskController.getAllTasks);

// Get a specific task by ID
router.get("/:id", taskController.getTaskById);

// Update a task by ID
router.put("/:id", verifyToken, taskController.updateTask);

// Delete a task by ID
router.delete("/:id", verifyToken, taskController.deleteTask);

module.exports = router;
