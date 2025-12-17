function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// ระบบ AI วิเคราะห์ข้อมูลเบื้องต้น (Simulated AI Logic)
function analyzeResume() {
    const inputText = document.getElementById('ai-input').value;
    
    if (inputText.length < 10) {
        alert("กรุณาใส่ข้อมูล Resume เพื่อให้ AI วิเคราะห์");
        return;
    }

    // จำลองการดึงข้อมูลจาก Text (RegEx หรือ AI Logic)
    // ในที่นี้คือตัวอย่างการดึงชื่อถ้าพบในข้อความ
    alert("AI กำลังวิเคราะห์ข้อมูลของคุณ...");
    
    // ตัวอย่าง: ถ้ามีคำว่า 'สมชาย' ใน Resume ให้ไปกรอกในฟอร์มอัตโนมัติ
    if(inputText.includes("สมชาย")) {
        document.getElementById('name').value = "นายสมชาย ใจดี (Somchai Jaidee)";
    }
    
    // คุณสามารถเชื่อมต่อ OpenAI API ตรงนี้ได้ในอนาคต
    alert("วิเคราะห์เสร็จสิ้น! ข้อมูลบางส่วนถูกเติมลงในฟอร์มแล้ว");
}
