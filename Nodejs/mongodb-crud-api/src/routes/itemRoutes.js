// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Item = require("../models/item");

/**
 * @swagger
 * components:
 *    schemas:
 *      Item:
 *          type: object
 *          properties:
 *            name :
 *                type : string
 *            description :
 *                type: string
 *            price :
 *               type : number
 *
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all the items
 *     tags:
 *       - Items
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Item'
 */
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get all the items
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Item'
 */
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new Item
 *     tags:
 *       - Items
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("price", "Price is required").isNumeric(),
  ],
  async (req, res) => {
    try {
      const item = new Item(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a Item by ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.price = req.body.price || item.price;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a Item by ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: No Content
 */
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    await item.remove();
    res.json({ msg: "Item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
