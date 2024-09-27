document.addEventListener('DOMContentLoaded', function() {
    // استدعاء العناصر
    const bigCup = document.querySelector('.big-cup');
    const smallCups = document.querySelectorAll('.small-cups img');
    const title = document.getElementById('main-title');

    // تعيين عنوان الصفحة
    title.innerHTML = "It's not just a Coffee It's <span style='color: green;'>ADY</span>";

    // إضافة حدث النقر على كل صورة صغيرة
    smallCups.forEach(cup => {
        cup.addEventListener('click', function() {
            // تعيين مصدر الصورة الكبيرة بناءً على الصورة الصغيرة التي تم النقر عليها
            bigCup.src = this.src;
        });
    });

    // متغير لتتبع عدد النقرات
    let clickCount = 0;

    // دالة للتحقق من عدد النقرات
    function checkTripleClick() {
        clickCount++;

        if (clickCount == 2) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // تمرير سلس إلى الأعلى
            });

            // إعادة تعيين عداد النقرات بعد تنفيذ العملية
            clickCount = 0;
        }

        // إعادة تعيين عداد النقرات بعد 500 مللي ثانية في حال عدم النقر ثلاث مرات
        setTimeout(() => {
            clickCount = 0;
        }, 500);
    }

    // إضافة مستمع للنقرات على الصفحة
    document.addEventListener('click', checkTripleClick);
});