const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  // blockUser,
  //unblockUser,
  handleRefreshToken,
  logout,
  loginAdmin,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  getOrderById,
  removeCart,
  updateCart,
  getAUserCart,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/cart/create-order", createOrder);
router.post("/register", createUser);

router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", userCart);


router.get("/all-users", getallUser);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getorderbyid/:id", authMiddleware, isAdmin, getOrderById);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);

router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/cart", getUserCart);
router.get("/acart", getAUserCart);

router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/cart/:cartId", removeCart);
router.delete("/cart/:cartId/:newQuantity", authMiddleware, updateCart);

router.delete("/:id", deleteaUser);


router.put(
  "/order/update-order",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
router.put("/address/user-address", authMiddleware, saveAddress);
// router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
// router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
