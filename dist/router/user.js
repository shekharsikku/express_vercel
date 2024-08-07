"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helper_1 = require("../helper");
const schema_1 = require("../utils/schema");
const middleware_1 = require("../middleware");
const user_1 = require("../controller/user");
const router = (0, express_1.Router)();
router.post("/register", (0, helper_1.validateSchema)(schema_1.registerSchema), user_1.registerUser);
router.post("/login", (0, helper_1.validateSchema)(schema_1.loginSchema), user_1.loginUser);
router.delete("/logout", middleware_1.accessToken, user_1.logoutUser);
router.delete("/delete-user", (0, helper_1.validateSchema)(schema_1.deleteUserSchema), middleware_1.accessToken, user_1.deleteUserDetails);
router.patch("/refresh-token", middleware_1.refreshToken, user_1.tokenRefresh);
router.patch("/change-password", (0, helper_1.validateSchema)(schema_1.changePasswordSchema), middleware_1.accessToken, user_1.changeCurrentPassword);
router.patch("/update-details", (0, helper_1.validateSchema)(schema_1.updateDetailsSchema), middleware_1.accessToken, user_1.updateUserDetails);
router.get("/current-user", middleware_1.accessToken, user_1.currentUser);
exports.default = router;
