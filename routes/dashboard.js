const express = require('express');
const dashboardController = require('../controllers/dashboard');  // นำเข้า controller สำหรับ dashboard
const passport = require('passport');
const { protectRoute } = require('../auth');  // นำเข้า middleware เพื่อป้องกันเส้นทาง

const router = express.Router();  // สร้าง Router สำหรับจัดการเส้นทาง

// กำหนดเส้นทางสำหรับ dashboard โดยใช้ protectRoute เพื่อป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต
router.get('/', protectRoute, dashboardController.dashboardView);

module.exports = router;  // ส่งออก router นี้เพื่อใช้ในส่วนอื่นของแอป
