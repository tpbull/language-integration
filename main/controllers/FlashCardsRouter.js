import express from "express";
import { flashCardsController, flashCardController, flashCardsSearchController } from "./FlashCardsController.js";

const router = express.Router();

router.get("/", flashCardsController);
router.get("/search", flashCardsSearchController);
// router.get("/:flashcardId", flashCardController);

router.get("/getFlashCards", (req, res) => {
    res.json({ message: "Flashcards API endpoint -> getFlashCards" });
});

export default router;