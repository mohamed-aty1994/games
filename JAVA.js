let randomNumber = Math.floor(Math.random() * 100) + 1; // توليد رقم عشوائي بين 1 و 100
let attempts = 0; // عدد المحاولات

console.log("الرقم العشوائي هو:", randomNumber); // طباعة الرقم العشوائي في وحدة التحكم

document.getElementById("submitGuess").addEventListener("click", function() {
    const guessInput = document.getElementById("guessInput");
    const messageDisplay = document.getElementById("message");
    const statusDisplay = document.getElementById("statusMessage"); // مربع الحالة
    const resetButton = document.getElementById("resetButton");
    const submitButton = document.getElementById("submitGuess");

    let guess = parseInt(guessInput.value); // تحويل الإدخال إلى عدد صحيح
    attempts++; // زيادة عدد المحاولات

    console.log("الحدس هو:", guess); // طباعة الحدس في وحدة التحكم

    // تحقق من عدم إدخال أكثر من 100 رقم
    if (attempts > 100) {
        messageDisplay.textContent = "عذراً، لا يمكنك إدخال أكثر من 100 رقم!";
        guessInput.value = ''; // تفريغ حقل الإدخال
        return; // الخروج من الدالة
    }

    // تحقق من صحة الإدخال
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageDisplay.textContent = "الرجاء إدخال رقم بين 1 و 100.";
        statusDisplay.textContent = ''; // تفريغ مربع الحالة
        guessInput.value = ''; // تفريغ حقل الإدخال
        return; // الخروج من الدالة
    }

    // منطق اللعبة
    if (guess < randomNumber) {
     
        statusDisplay.textContent = "إدخالك أقل من الرقم العشوائي."; // عرض الحالة
        statusDisplay.className = 'red'; // تغيير لون النص إلى الأحمر
        submitButton.classList.add("error"); // إضافة فئة الخطأ
    } else if (guess > randomNumber) {
       
        statusDisplay.textContent = "إدخالك أكبر من الرقم العشوائي."; // عرض الحالة
        submitButton.classList.add("error"); // إضافة فئة الخطأ
    } else {
        messageDisplay.textContent = `مبروك! لقد خمنت الرقم الصحيح ${randomNumber} في ${attempts} محاولة!`;
        statusDisplay.textContent = ''; // تفريغ مربع الحالة عند الفوز
        resetButton.style.display = "block"; // إظهار زر إعادة اللعب
    }

    // استعادة لون الزر بعد فترة
    setTimeout(() => {
        submitButton.classList.remove("error"); // إزالة فئة الخطأ
    }, 1000);

    guessInput.value = ''; // تفريغ حقل الإدخال بعد كل محاولة
});

document.getElementById("resetButton").addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // توليد رقم عشوائي جديد
    attempts = 0; // إعادة تعيين عدد المحاولات
    document.getElementById("guessInput").value = ''; // تفريغ حقل الإدخال
    document.getElementById("message").textContent = ''; // تفريغ رسالة اللعب
    document.getElementById("statusMessage").textContent = ''; // تفريغ مربع الحالة
    this.style.display = 'none'; // إخفاء زر إعادة اللعب
});
