const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist/public")));

// 共用發信函數
async function handleMail(req, res) {
console.log("==== 收到表單請求 ====", req.url);
console.log("內容:", req.body);
  try {
    const data = req.body;
    // 兼容舊的 name/email/message 和新的 apply 表單
    const name = data.studentname || data.parentName || data.name || data.fullName || "客戶";
    const email = data.parentEmail || data.email || data.contactEmail || "未填寫";
    const phone = data.parentPhone || data.phone || "";
    const message = data.remarks || data.message || data.subject || JSON.stringify(data, null, 2);

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "info@truebridge.asia",
        pass: "tyet-qrwf-qbqx-fwmg"
      }
    });

    await transporter.sendMail({
      from: '"TrueBridge 表單" <info@truebridge.asia>',
      to: "info@truebridge.asia",
      subject: "新表單提交 - TrueBridge",
      text: `姓名: ${name}\n電話: ${phone}\nEmail: ${email}\n\n全部資料:\n${JSON.stringify(data, null, 2)}`
    });

    console.log("寄信成功能");
    res.json({ success: true });
  } catch (err) {
    console.error("寄信失敗詳細:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}

// 3個路徑都聽，就不會再對不上
app.post("/api/contact", handleMail);
app.post("/api/apply", handleMail);
app.post("/api/send-application", handleMail);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});