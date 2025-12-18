/**
 * ฟังก์ชันสำหรับการเปลี่ยนหน้า (Single Page Application Logic)
 * @param {string} pageId - ID ของ section ที่ต้องการแสดง (page1, page2, page3, page4)
 */
function navigateTo(pageId) {
    // ซ่อนทุกหน้าที่มีคลาส .page
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none'; // มั่นใจว่าซ่อนสนิท
    });

    // แสดงหน้าที่เลือก
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
        
        // เลื่อนหน้าจอขึ้นไปบนสุดทุกครั้งที่เปลี่ยนหน้า
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * ระบบจำลอง AI วิเคราะห์ Resume
 * ฟังก์ชันนี้จะดึงข้อความจากช่อง AI Input แล้วนำไปเติมในฟอร์มโดยอัตโนมัติ
 */
function analyzeResume() {
    const aiInput = document.getElementById('ai-input').value;
    
    if (!aiInput || aiInput.length < 10) {
        alert("กรุณาวางข้อความจาก Resume ของคุณในช่องว่างเพื่อให้ AI วิเคราะห์ครับ");
        return;
    }

    // แสดงสถานะจำลองการทำงานของ AI
    console.log("AI is analyzing data...");
    alert("AI กำลังวิเคราะห์ข้อมูลและกำลังกรอกฟอร์มให้คุณ...");

    // --- ส่วนจำลอง Logic การดึงข้อมูล (Mock AI Extraction) ---
    
    // ตัวอย่าง: ค้นหาเบอร์โทรศัพท์ (เลข 10 หลัก)
    const phoneMatch = aiInput.match(/\d{10}/);
    if (phoneMatch) {
        const telInput = document.querySelector('input[type="tel"]');
        if (telInput) telInput.value = phoneMatch[0];
    }

    // ตัวอย่าง: ค้นหาอีเมล
    const emailMatch = aiInput.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
        const emailInput = document.querySelector('input[type="email"]');
        if (emailInput) emailInput.value = emailMatch[0];
    }

    // ตัวอย่าง: ถ้าในข้อความมีคำว่า "Engineer" ให้เลือกตำแหน่งอัตโนมัติ
    if (aiInput.toLowerCase().includes("engineer")) {
        const jobSelect = document.getElementById('job-select');
        if (jobSelect) jobSelect.value = "Product / Process Engineer"; 
    }

    // คุณสามารถเพิ่มเงื่อนไขการหาชื่อ หรือ ข้อมูลอื่นๆ ได้ที่นี่
    
    alert("วิเคราะห์เรียบร้อย! ข้อมูลเบื้องต้นถูกนำไปใส่ในฟอร์มแล้ว กรุณาตรวจสอบความถูกต้องอีกครั้ง");
}

/**
 * จัดการการส่งฟอร์ม
 */
document.getElementById('jobForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันหน้าเว็บรีโหลด
    
    // ตรงนี้คุณสามารถเพิ่มโค้ดส่งข้อมูลไปยัง Email หรือ Google Sheets ได้ในอนาคต
    console.log("Form Submitted Successfully");
    
    // ไปยังหน้าจบ (หน้า 4)
    navigateTo('page4');
});

// ตั้งค่าเริ่มต้นเมื่อโหลดหน้าเว็บ (ให้แสดงหน้าแรกเสมอ)
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('page1');
});
