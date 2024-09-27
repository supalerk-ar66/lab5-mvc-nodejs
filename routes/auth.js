const express = require('express');
const authController = require('../controllers/auth');  // นำเข้า controller สำหรับการจัดการ Authentication
const dashboardController = require('../controllers/dashboard');  // นำเข้า controller สำหรับ dashboard

const router = express.Router();

// เส้นทางสำหรับการลงทะเบียน
router.get('/register', authController.registerView);  // แสดงหน้าแบบฟอร์มการลงทะเบียน
router.post('/register', authController.registerUser);  // รับข้อมูลการลงทะเบียนและบันทึกผู้ใช้

// เส้นทางสำหรับการเข้าสู่ระบบ
router.get('/login', authController.loginView);  // แสดงหน้าแบบฟอร์มการเข้าสู่ระบบ
router.post('/login', authController.loginUser);  // รับข้อมูลการเข้าสู่ระบบและตรวจสอบผู้ใช้

// เส้นทางสำหรับการออกจากระบบ
router.get('/logout', authController.logoutUser);  // ทำการออกจากระบบผู้ใช้

module.exports = router;  // ส่งออก router นี้เพื่อใช้ในส่วนอื่นของแอป
