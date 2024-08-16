import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createRoomController,
  deleteRoomController,
  getRoomController,
  getSingleRoomController,
  roomCategoryController,
  roomCountController,
 roomFiltersController,
  roomListController,
  roomPhotoController,
  relatedRoomController,
  searchRoomController,
  updateRoomController,
} from "../controllers/roomController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-room",
  requireSignIn,
  isAdmin,
  formidable(),
  createRoomController
);
//routes
router.put(
  "/update-room/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateRoomController
);

//get rooms
router.get("/get-room", getRoomController);

//single room
router.get("/get-room/:slug", getSingleRoomController);

//get photo
router.get("/room-photo/:pid", roomPhotoController);

//delete room
router.delete("/delete-room/:pid", deleteRoomController);

//filter room
router.post("/room-filters", roomFiltersController);

//room count
router.get("/room-count", roomCountController);

//room per page
router.get("/room-list/:page", roomListController);

//search room
router.get("/search/:keyword", searchRoomController);

//similar room
router.get("/related-room/:pid/:cid", relatedRoomController);

//category wise room
router.get("/room-category/:slug", roomCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;