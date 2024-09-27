const express = require('express');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const db = require('./db.js');
const { init: initAuth } = require('./auth');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'pug');

initAuth();  // เรียกใช้ฟังก์ชันเพื่อกำหนดค่า Authentication
app.use(session({
  secret: 'secret',  // รหัสลับสำหรับเซสชัน
  saveUninitialized: true,  // บันทึกเซสชันที่ยังไม่มีการกำหนดค่า
  resave: true  // บันทึกเซสชันซ้ำทุกครั้ง
}));

app.use(passport.initialize());  // เริ่มต้น passport
app.use(passport.session());  // ใช้ session ของ passport เพื่อจัดการการเข้าสู่ระบบ

app.use('/', authRoutes);  // ใช้เส้นทางสำหรับการเข้าสู่ระบบ
app.use('/', dashboardRoutes);  // ใช้เส้นทางสำหรับแดชบอร์ด

db.sync({ force: false })  // เชื่อมต่อฐานข้อมูลโดยไม่บังคับให้ลบข้อมูลเดิม
  .then(() => {
    app.listen(PORT, console.log('เซิร์ฟเวอร์กำลังทำงานบนพอร์ต: ' + PORT));  // เริ่มเซิร์ฟเวอร์
  });
