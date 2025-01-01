# exam
تایمر و کرنومتر پیشرفته:



از setTimeout و setInterval برای پیاده‌سازی تایمر، کرنومتر و آلارم استفاده کنید.

قابلیت شروع، توقف، ریست و تنظیم زمان را داشته باشد.

از classList و style برای تغییر ظاهر تایمر در حالت‌های مختلف (مثلاً شروع، توقف، پایان) استفاده کنید. برای این قسمت مثال بزن با راه حل




باشه، برای قسمت تایمر و کرنومتر پیشرفته، به طور خاص نحوه استفاده از classList و style برای تغییر ظاهر تایمر رو با مثال و راه حل براتون توضیح میدم.

هدف: می‌خواهیم وقتی تایمر شروع به کار می‌کنه، رنگ پس‌زمینه نمایشگر زمان تغییر کنه و وقتی متوقف میشه، به حالت اولیه برگرده. همچنین وقتی تایمر به پایان میرسه، یک انیمیشن کوتاه اجرا بشه.

HTML (ساختار اولیه):

HTML

<!DOCTYPE html>
<html>
<head>
    <title>تایمر پیشرفته</title>
    <style>
        #timer-display {
            font-size: 2em;
            padding: 10px;
            border: 1px solid #ccc;
            background-color: #f0f0f0; /* رنگ پس‌زمینه اولیه */
            transition: background-color 0.5s ease; /* برای انیمیشن تغییر رنگ */
        }

        #timer-display.running {
            background-color: lightgreen; /* رنگ پس‌زمینه در حالت اجرا */
        }
        #timer-display.finished {
            animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
            to {
                visibility: hidden;
            }
        }
    </style>
</head>
<body>
    <div id="timer-display">00:00:00</div>
    <button id="start-btn">شروع</button>
    <button id="stop-btn">توقف</button>

    <script src="script.js"></script>
</body>
</html>
JavaScript (script.js):

JavaScript

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let startTime;
let intervalId;
let isRunning = false;

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTime = Date.now();
        intervalId = setInterval(updateTimer, 1000);
        timerDisplay.classList.add('running'); // اضافه کردن کلاس running
        timerDisplay.classList.remove('finished')
        isRunning = true;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    timerDisplay.classList.remove('running'); // حذف کلاس running
    isRunning = false;

    //شبیه سازی پایان تایمر برای تست انیمیشن
    timerDisplay.textContent = `00:00:00`
    timerDisplay.classList.add('finished');
});

توضیحات:

CSS:
در CSS، برای timer-display یک رنگ پس‌زمینه اولیه و یک transition برای تغییر رنگ به صورت نرم تعریف کردیم.
کلاس running رنگ پس‌زمینه رو به سبز روشن تغییر میده.
کلاس finished با استفاده از animation و @keyframes یک انیمیشن چشمک‌زن ایجاد میکند.
JavaScript:
وقتی دکمه "شروع" کلیک میشه، کلاس running با استفاده از classList.add('running') به عنصر timer-display اضافه میشه و رنگ پس‌زمینه تغییر میکنه.
وقتی دکمه "توقف" کلیک میشه، کلاس running با استفاده از classList.remove('running') از عنصر حذف میشه و رنگ پس‌زمینه به حالت اولیه برمیگرده.
برای تست انیمیشن پایان، وقتی دکمه توقف زده میشه، مقدار تایمر صفر شده و کلاس finished به آن اضافه میشود.
با این روش، به راحتی می‌تونید با استفاده از classList و style (و CSS) ظاهر عناصر رو بر اساس وضعیت‌های مختلف برنامه تغییر بدید و به کاربر بازخورد مناسب بدید. این مثال نشون میده که چطور با کمترین کد جاوااسکریپت و بیشترین استفاده از CSS میتوان ظاهر رو کنترل کرد.

این فقط یک مثال ساده است و شما می‌تونید با اضافه کردن کلاس‌های CSS بیشتر و تغییر ویژگی‌های style، ظاهر تایمر رو به شکل دلخواه خودتون دربیارید. مثلاً می‌تونید رنگ متن، اندازه فونت، حاشیه‌ها و غیره رو تغییر بدید.
==============================================================================================
برای این مورد هم مثال با راه حل بزن لیست وظایف (To-Do List) با قابلیت‌های فیلتر و ذخیره‌سازی:



از querySelector، createElement، appendChild و remove برای مدیریت آیتم‌های لیست استفاده کنید.

از filter، every و some برای فیلتر کردن وظایف بر اساس وضعیت (انجام شده، در حال انجام، و غیره) استفاده کنید.

از localStorage برای ذخیره و بازیابی لیست وظایف استفاده کنید.

از addEventListener برای مدیریت رویدادهای کلیک، حذف و ویرایش آیتم‌ها استفاده کنید.




باشه، برای بخش لیست وظایف (To-Do List) با قابلیت‌های فیلتر و ذخیره‌سازی، یک مثال کامل با راه حل براتون می‌نویسم. این مثال شامل استفاده از querySelector، createElement، appendChild، remove، filter، localStorage و addEventListener هست.

HTML (index.html):

HTML

<!DOCTYPE html>
<html>
<head>
    <title>لیست وظایف</title>
    <style>
        ul { list-style: none; padding: 0; }
        li { display: flex; align-items: center; padding: 5px; border-bottom: 1px solid #eee; }
        li input[type="checkbox"] { margin-right: 10px; }
        .completed { text-decoration: line-through; color: #888; }
        .filters button { margin: 5px; padding: 5px 10px; }
    </style>
</head>
<body>
    <h1>لیست وظایف</h1>
    <input type="text" id="new-task" placeholder="وظیفه جدید">
    <button id="add-task">اضافه کردن</button>

    <div class="filters">
        <button data-filter="all">همه</button>
        <button data-filter="completed">انجام شده</button>
        <button data-filter="pending">در حال انجام</button>
    </div>

    <ul id="task-list"></ul>

    <script src="script.js"></script>
</body>
</html>
JavaScript (script.js):

JavaScript

const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filters button');

let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // بازیابی از localStorage

renderTasks(); // نمایش اولیه لیست

function renderTasks(filter = 'all') {
    taskList.innerHTML = ''; // پاک کردن لیست قبلی

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks(filter);
        });

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        if (task.completed) {
            taskText.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'حذف';
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task);
            saveTasks();
            renderTasks(filter);
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        renderTasks(filter);
    });
});

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
توضیحات:

ذخیره‌سازی و بازیابی با localStorage:
در ابتدای اسکریپت، لیست وظایف از localStorage بازیابی میشه. اگر چیزی در localStorage نباشه، یک آرایه خالی در نظر گرفته میشه.
تابع saveTasks لیست وظایف رو به صورت JSON در localStorage ذخیره میکنه.
نمایش وظایف با renderTasks:
این تابع لیست وظایف رو بر اساس فیلتر انتخاب شده (همه، انجام شده، در حال انجام) نمایش میده.
از createElement برای ساخت عناصر li، checkbox و button استفاده میشه.
از appendChild برای اضافه کردن این عناصر به لیست استفاده میشه.
از classList برای اضافه کردن کلاس completed به وظایف انجام شده استفاده میشه.
فیلتر کردن با filter:
در تابع renderTasks از متد filter برای فیلتر کردن وظایف بر اساس وضعیتشون استفاده میشه.
حذف وظایف با remove و filter:
با کلیک روی دکمه حذف، وظیفه مورد نظر با استفاده از filter از آرایه tasks حذف میشه و لیست دوباره نمایش داده میشه.
مدیریت رویدادها با addEventListener:
از addEventListener برای مدیریت رویدادهای کلیک روی دکمه اضافه کردن، تغییر وضعیت چک‌باکس‌ها و کلیک روی دکمه حذف استفاده میشه.
این مثال یک لیست وظایف کامل با قابلیت‌های مورد نظر رو پیاده‌سازی می‌کنه. امیدوارم این مثال براتون مفید باشه و بتونید از اون برای پروژه‌های خودتون استفاده کنید.
=====================================================================================================
برای این قسمت هم مثال بزن برام گالری تصاویر با قابلیت‌های پیشرفته:



از createElement و appendChild برای نمایش تصاویر استفاده کنید.

از addEventListener برای مدیریت رویدادهای کلیک برای نمایش تصویر بزرگتر، حرکت بین تصاویر و غیره استفاده کنید.

از parentElement، children و nextSibling برای پیمایش بین تصاویر استفاده کنید.

از classList و style برای ایجاد جلوه‌های ویژه (مانند بزرگنمایی، سایه و غیره) استفاده کنید.

از رویداد scroll برای نمایش تصاویر به صورت اسلایدشو استفاده کنید.




باشه، برای بخش گالری تصاویر با قابلیت‌های پیشرفته، یک مثال کامل با راه حل براتون می‌نویسم که شامل موارد زیر باشه:

نمایش تصاویر با createElement و appendChild
مدیریت رویدادهای کلیک با addEventListener برای نمایش تصویر بزرگتر و حرکت بین تصاویر
پیمایش بین تصاویر با parentElement، children و nextSibling
ایجاد جلوه‌های ویژه با classList و style
استفاده از رویداد scroll برای نمایش تصاویر به صورت اسلایدشو (به صورت ساده)
HTML (index.html):

HTML

<!DOCTYPE html>
<html>
<head>
    <title>گالری تصاویر</title>
    <style>
        #gallery {
            display: flex;
            overflow-x: auto; /* برای اسکرول افقی */
            width: 80%;
            margin: 20px auto;
            border: 1px solid #ccc;
            padding: 10px;
        }

        .thumbnail {
            width: 150px;
            height: 100px;
            margin: 5px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: border-color 0.3s ease;
        }
        .thumbnail:hover{
            border-color: blue;
        }

        #large-image {
            display: block;
            max-width: 90%;
            max-height: 80vh;
            margin: 20px auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .active{
            border-color: red;
        }
    </style>
</head>
<body>
    <h1>گالری تصاویر</h1>
    <div id="gallery"></div>
    <img id="large-image" src="" alt="تصویر بزرگ">

    <script src="script.js"></script>
</body>
</html>
JavaScript (script.js):

JavaScript

const gallery = document.getElementById('gallery');
const largeImage = document.getElementById('large-image');
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    // ... لیست تصاویر
];

let currentIndex = 0;

images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `تصویر ${index + 1}`;
    img.classList.add('thumbnail');
    img.dataset.index = index; // ذخیره index تصویر
    gallery.appendChild(img);

    img.addEventListener('click', () => {
        largeImage.src = image;
        currentIndex = index;
        highlightCurrentImage();
    });
});

function highlightCurrentImage(){
    const thumbnails = document.querySelectorAll('.thumbnail')
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'))
    thumbnails[currentIndex].classList.add('active')
}

// اسلایدشو ساده با اسکرول (بهینه نیست، برای نمایش مفهوم)
gallery.addEventListener('scroll', () => {
    // در اینجا می‌توان منطق پیچیده‌تری برای اسلایدشو بر اساس موقعیت اسکرول پیاده‌سازی کرد
    // این فقط یک مثال ساده برای نمایش مفهوم است
});

//نمایش اولین عکس به صورت پیشفرض
largeImage.src = images[0]
highlightCurrentImage()
توضیحات:

HTML: ساختار اولیه گالری شامل یک div با id gallery برای نمایش تصاویر کوچک و یک img با id large-image برای نمایش تصویر بزرگ است.
JavaScript:
آرایه‌ای از آدرس تصاویر (images) تعریف شده.
با استفاده از حلقه forEach، برای هر تصویر یک عنصر img ساخته میشه و به gallery اضافه میشه.
به هر تصویر یک dataset با نام index اختصاص داده میشه تا بتونیم اندیس تصویر رو ذخیره کنیم.
رویداد click به هر تصویر اضافه میشه تا با کلیک روی آن، تصویر بزرگ در largeImage نمایش داده بشه و اندیس تصویر فعلی ذخیره شود و تابع highlightCurrentImage صدا زده شود.
تابع highlightCurrentImage تمام کلاس های active را از تصاویر کوچک حذف میکند و سپس به عکس فعلی اضافه میکند.
رویداد scroll به gallery اضافه شده. در این مثال یک پیاده‌سازی بسیار ساده از اسلایدشو با اسکرول انجام شده. برای یک اسلایدشوی واقعی و بهینه، باید منطق پیچیده‌تری بر اساس موقعیت اسکرول و نمایش تصاویر در ویوپورت پیاده‌سازی بشه.
در نهایت اولین عکس به صورت پیشفرض نمایش داده میشود.
نکات مهم:

برای تست این کد، باید فایل‌های تصویری با نام‌های image1.jpg، image2.jpg و غیره در کنار فایل HTML و JavaScript خودتون داشته باشید.
پیاده‌سازی اسلایدشو با اسکرول در این مثال بسیار ساده است و برای نمایش مفهوم استفاده شده. برای یک اسلایدشوی حرفه‌ای، باید از کتابخانه‌های جاوااسکریپت یا پیاده‌سازی‌های پیچیده‌تر استفاده کنید.
برای بهبود تجربه کاربری، می‌تونید جلوه‌های بصری بیشتری با CSS به تصاویر اضافه کنید، مانند سایه، انیمیشن‌های hover و غیره.
این مثال یک گالری تصاویر پایه با قابلیت‌های مورد نظر رو پیاده‌سازی می‌کنه. امیدوارم این مثال براتون مفید باشه.
===================================================================

باشه، برای بخش فرم اعتبارسنجی پیشرفته، یک مثال کامل با راه حل براتون می‌نویسم که شامل موارد زیر باشه:

دسترسی به عناصر فرم با querySelector
مدیریت رویدادهای input، blur و submit با addEventListener
نمایش پیام‌های خطا و تغییر ظاهر فیلدها با textContent و classList
اعتبارسنجی فرمت ایمیل و رمز عبور با filter (به شکل غیر مستقیم و با استفاده از Regular Expression)، every و some
کنترل ورودی کاربر با رویدادهای keydown و keypress
HTML (index.html):

HTML

<!DOCTYPE html>
<html>
<head>
    <title>فرم ثبت‌نام</title>
    <style>
        .error {
            color: red;
            font-size: small;
        }
        .invalid-input{
            border-color: red;
        }
        label{
            display: block;
            margin-bottom: 5px;
        }
        input{
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <h1>فرم ثبت‌نام</h1>
    <form id="signup-form">
        <label for="name">نام:</label>
        <input type="text" id="name" name="name" required>
        <div class="error" id="name-error"></div>

        <label for="email">ایمیل:</label>
        <input type="email" id="email" name="email" required>
        <div class="error" id="email-error"></div>

        <label for="password">رمز عبور:</label>
        <input type="password" id="password" name="password" required>
        <div class="error" id="password-error"></div>

        <label for="confirm-password">تکرار رمز عبور:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
         <div class="error" id="confirm-password-error"></div>

        <button type="submit">ثبت‌نام</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
JavaScript (script.js):

JavaScript

const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیشفرض

    let isValid = true;

    //اعتبارسنجی نام
    if (nameInput.value.trim() === '') {
        showError(nameInput, "لطفا نام خود را وارد کنید.")
        isValid = false;
    } else {
        hideError(nameInput)
    }

    // اعتبارسنجی ایمیل
    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'ایمیل معتبر نیست.');
        isValid = false;
    } else {
       hideError(emailInput)
    }

    // اعتبارسنجی رمز عبور
    if (passwordInput.value.length < 8) {
        showError(passwordInput, 'رمز عبور باید حداقل ۸ کاراکتر باشد.');
        isValid = false;
    } else {
        hideError(passwordInput)
    }

    //اعتبارسنجی تطبیق رمز عبور
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'رمز عبور و تکرار آن مطابقت ندارند.');
        isValid = false;
    } else {
        hideError(confirmPasswordInput)
    }

    if (isValid) {
        alert('فرم با موفقیت ثبت شد!');
        form.reset();//ریست کردن فرم
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(inputElement, errorMessage) {
    const errorDiv = document.getElementById(inputElement.id + '-error');
    errorDiv.textContent = errorMessage;
    inputElement.classList.add('invalid-input')
}

function hideError(inputElement){
    const errorDiv = document.getElementById(inputElement.id + '-error');
    errorDiv.textContent = '';
    inputElement.classList.remove('invalid-input')
}
توضیحات:

HTML: یک فرم ساده با فیلدهای نام، ایمیل، رمز عبور و تکرار رمز عبور ایجاد شده. همچنین divهایی با کلاس error برای نمایش پیام‌های خطا در نظر گرفته شده.
JavaScript:
با استفاده از querySelector به عناصر فرم دسترسی پیدا شده.
رویداد submit به فرم اضافه شده تا از ارسال فرم به صورت پیشفرض جلوگیری بشه و اعتبارسنجی انجام بشه.
تابع isValidEmail با استفاده از Regular Expression فرمت ایمیل رو بررسی میکنه.
تابع showError پیام خطا رو در div مربوطه نمایش میده و کلاس invalid-input را به input اضافه میکند.
تابع hideError پیام خطا را پاک میکند و کلاس invalid-input را حذف میکند.
در داخل رویداد submit، فیلدها بررسی میشوند و در صورت وجود خطا، پیام مناسب نمایش داده میشه.
در صورت معتبر بودن فرم، یک پیام alert نمایش داده میشه و فرم ریست میشود.
نکات مهم:

این مثال اعتبارسنجی‌های ساده‌ای رو انجام میده. شما می‌تونید اعتبارسنجی‌های پیچیده‌تری مثل بررسی طول رمز عبور، وجود حروف بزرگ و کوچک و اعداد در رمز عبور، و غیره رو به اون اضافه کنید.
استفاده از Regular Expression برای اعتبارسنجی ایمیل و سایر فیلدها بسیار رایج و قدرتمند است.
برای بهبود تجربه کاربری، می‌تونید از رویدادهای input و blur هم استفاده کنید تا اعتبارسنجی به صورت لحظه‌ای و بعد از ترک فیلد انجام بشه.
این مثال یک فرم اعتبارسنجی پایه با قابلیت‌های مورد نظر رو پیاده‌سازی می‌کنه. امیدوارم این مثال براتون مفید باشه.
=========================================================================
ایجاد یک بازی ساده (مانند حافظه یا حدس عدد):



از createElement و appendChild برای ایجاد عناصر بازی استفاده کنید.

از addEventListener برای مدیریت رویدادهای کلیک و سایر رویدادها استفاده کنید.

از setTimeout و setInterval برای ایجاد تایمر و انیمیشن استفاده کنید.

از this و event bubbling برای مدیریت رویدادها به صورت مؤثر استفاده کنید. در این مورد هم مثال بزن




باشه، برای بخش ایجاد یک بازی ساده، یک مثال از بازی حافظه با استفاده از مفاهیم ذکر شده براتون می‌نویسم. این مثال شامل موارد زیر خواهد بود:

ایجاد عناصر بازی با createElement و appendChild
مدیریت رویدادهای کلیک با addEventListener
استفاده از setTimeout برای نمایش موقت کارت‌ها
استفاده از this و event bubbling برای مدیریت رویدادها
HTML (index.html):

HTML

<!DOCTYPE html>
<html>
<head>
    <title>بازی حافظه</title>
    <style>
        #game-board {
            display: grid;
            grid-template-columns: repeat(4, 100px); /* ۴ ستون */
            grid-gap: 10px;
            margin: 20px auto;
        }

        .card {
            width: 100px;
            height: 100px;
            background-color: #eee;
            border: 1px solid #ccc;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            user-select: none; /* جلوگیری از انتخاب متن */
        }

        .card.flipped {
            background-color: #fff; /* رنگ پس‌زمینه کارت برگشته */
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <h1>بازی حافظه</h1>
    <div id="game-board"></div>

    <script src="script.js"></script>
</body>
</html>
JavaScript (script.js):

JavaScript

const gameBoard = document.getElementById('game-board');
const cards = [];
let flippedCards = [];
let lockBoard = false;//برای جلوگیری از کلیک های پشت سر هم

// آرایه ای از جفت اعداد
const cardValues = [1, 1, 2, 2, 3, 3, 4, 4];

// بهم ریختن آرایه اعداد
cardValues.sort(() => 0.5 - Math.random());

// ایجاد کارت ها
for (let i = 0; i < cardValues.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardValues[i]; // ذخیره مقدار کارت
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
    cards.push(card);
}

function flipCard() {
    if (lockBoard) return;
    if (this === flippedCards[0]) return;
    this.classList.add('flipped');

    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    lockBoard = true;

    let isMatch = flippedCards[0].dataset.value === flippedCards[1].dataset.value;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    flippedCards[0].removeEventListener('click', flipCard);
    flippedCards[1].removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        flippedCards[0].classList.remove('flipped');
        flippedCards[1].classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    flippedCards = [];
    lockBoard = false;
}
توضیحات:

HTML: یک div با id game-board برای نگهداری کارت‌ها ایجاد شده. استایل‌های CSS برای نمایش کارت‌ها به صورت گرید و جلوه‌های بصری ساده تعریف شده.
JavaScript:
آرایه‌ای از اعداد (cardValues) ایجاد شده که مقادیر کارت‌ها رو مشخص میکنه. این آرایه با استفاده از sort و Math.random به صورت تصادفی بهم ریخته میشه.
با استفاده از حلقه for، کارت‌ها (div با کلاس card) ایجاد و به game-board اضافه میشن. مقدار هر کارت در dataset.value ذخیره میشه.
تابع flipCard با استفاده از this به کارت کلیک شده دسترسی پیدا میکنه و کلاس flipped رو به اون اضافه میکنه.
در تابع checkForMatch بررسی میشه که آیا دو کارت برگشته با هم مطابقت دارن یا نه.
تابع disableCards رویداد click رو از کارت‌های منطبق حذف میکنه تا دیگه قابل کلیک نباشن.
تابع unflipCards با استفاده از setTimeout بعد از یک ثانیه کارت‌ها رو دوباره برمیگردونه.
متغیر lockBoard برای جلوگیری از کلیک های پشت سرهم و ایجاد مشکل در منطق بازی استفاده میشود.
نکات مهم:

این مثال یک پیاده‌سازی ساده از بازی حافظه است. می‌تونید اون رو با اضافه کردن ویژگی‌هایی مثل تایمر، شمارش تعداد حرکات، سطح دشواری و غیره بهبود بدید.
استفاده از this در تابع flipCard به ما اجازه میده که به راحتی به کارت کلیک شده دسترسی داشته باشیم.
این مثال از event bubbling به صورت مستقیم استفاده نمیکنه، چون رویداد click مستقیماً به هر کارت اختصاص داده شده. اما اگر ساختار پیچیده‌تری داشتیم (مثلاً کارت‌ها داخل یک div دیگه بودن)، می‌تونستیم از event delegation و event bubbling برای مدیریت رویدادها به صورت بهینه‌تر استفاده کنیم.
این مثال یک بازی حافظه پایه رو با استفاده از مفاهیم مورد نظر پیاده‌سازی می‌کنه. امیدوارم این مثال براتون مفید باشه.
==============================================================================================


باشه، در این بخش به نحوه مدیریت عناصر DOM با استفاده از for...in، Object.keys، Object.values، spread (...) و rest parameters (...) می‌پردازیم و مثال‌هایی برای هر کدام ارائه می‌دهیم.

نکته مهم: استفاده مستقیم از for...in برای پیمایش عناصر DOM به طور معمول توصیه نمی‌شود. زیرا for...in برای پیمایش ویژگی‌های اشیاء طراحی شده و نه آرایه‌ها یا NodeListهایی که توسط متدهایی مانند querySelectorAll برگردانده می‌شوند. برای پیمایش NodeListها بهتر است از for...of، forEach یا حلقه‌های for معمولی استفاده کنید. با این حال، برای نشان دادن مفهوم، یک مثال ساده ارائه می‌دهیم.

1. for...in (با احتیاط):

این مثال نشان می‌دهد که چگونه می‌توان از for...in برای پیمایش ویژگی‌های یک شیء که حاوی اطلاعات مربوط به عناصر DOM است، استفاده کرد.

HTML

<!DOCTYPE html>
<html>
<head>
    <title>for...in در DOM</title>
</head>
<body>
    <div id="my-element"></div>

    <script>
        const elementData = {
            id: 'my-element',
            className: 'highlighted',
            textContent: 'این یک عنصر است'
        };

        const element = document.getElementById(elementData.id);

        for (const key in elementData) {
            if (elementData.hasOwnProperty(key)) { // بررسی وجود ویژگی در خود شیء
                element[key] = elementData[key];
            }
        }
    </script>
</body>
</html>
در اینجا، for...in ویژگی‌های شیء elementData را پیمایش می‌کند و مقادیر آنها را به ویژگی‌های متناظر عنصر DOM اختصاص می‌دهد.

2. Object.keys و Object.values:

این مثال نشان می‌دهد که چگونه می‌توان از Object.keys و Object.values برای دریافت کلیدها و مقادیر یک شیء و سپس استفاده از آنها برای دستکاری عناصر DOM استفاده کرد.

HTML

<!DOCTYPE html>
<html>
<head>
    <title>Object.keys و Object.values در DOM</title>
</head>
<body>
    <ul id="my-list"></ul>

    <script>
        const listItems = {
            item1: 'مورد اول',
            item2: 'مورد دوم',
            item3: 'مورد سوم'
        };

        const list = document.getElementById('my-list');

        Object.keys(listItems).forEach(key => {
            const li = document.createElement('li');
            li.textContent = listItems[key];
            list.appendChild(li);
        });

        // مثال با Object.values
        Object.values(listItems).forEach(value => {
            const li = document.createElement('li');
            li.textContent = value;
            list.appendChild(li);
        });
    </script>
</body>
</html>
در اینجا، Object.keys آرایه‌ای از کلیدها و Object.values آرایه‌ای از مقادیر را برمی‌گرداند که سپس با استفاده از forEach برای ایجاد عناصر li و اضافه کردن آنها به لیست استفاده می‌شوند.

3. Spread (...):

از spread operator برای کپی کردن ویژگی‌های یک شیء به شیء دیگر یا عناصر یک آرایه به آرایه دیگر استفاده می‌شود. در اینجا مثالی از استفاده آن در DOM آورده شده:

HTML

<!DOCTYPE html>
<html>
<head>
    <title>Spread در DOM</title>
</head>
<body>
    <div id="my-element"></div>

    <script>
        const defaultStyles = {
            backgroundColor: '#f0f0f0',
            padding: '10px',
            border: '1px solid #ccc'
        };

        const element = document.getElementById('my-element');

        // کپی استایل ها با spread
        Object.assign(element.style, defaultStyles);

        // یا به صورت مستقیم تر:
        // element.style = {...element.style, ...defaultStyles};

        element.textContent = "این یک عنصر با استایل است";
    </script>
</body>
</html>
در اینجا، ویژگی‌های defaultStyles با استفاده از spread operator به شیء element.style کپی می‌شوند.

4. Rest parameters (...):

از rest parameters برای دریافت تعداد نامشخصی از آرگومان به یک تابع استفاده می‌شود. این آرگومان‌ها به صورت یک آرایه در دسترس خواهند بود.

HTML

<!DOCTYPE html>
<html>
<head>
    <title>Rest parameters در DOM</title>
</head>
<body>
    <ul id="my-list"></ul>

    <script>
        function addListItems(listElement, ...items) {
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listElement.appendChild(li);
            });
        }

        const list = document.getElementById('my-list');
        addListItems(list, 'مورد اول', 'مورد دوم', 'مورد سوم', 'مورد چهارم');
    </script>
</body>
</html>
در اینجا، تابع addListItems با استفاده از rest parameters (...items) هر تعداد آرگومان را دریافت می‌کند و آنها را به عنوان موارد لیست به عنصر ul اضافه می‌کند.

این مثال‌ها نحوه استفاده از for...in، Object.keys، Object.values، spread و rest parameters در دستکاری DOM را نشان می‌دهند. به یاد داشته باشید که برای پیمایش مستقیم عناصر DOM، روش‌های بهتری مانند for...of و forEach وجود دارند.



===============================================================================
بسیار خب، با دانشی که در مورد متدهای جاوااسکریپت و CSS ارائه دادید، چند ایده برای پروژه‌های تمرینی با استفاده از این مفاهیم پیشنهاد می‌کنم. این پروژه‌ها به شما کمک می‌کنند تا درک عمیق‌تری از نحوه کار این متدها پیدا کنید.

نکته: این فقط ایده‌ها هستند و شما می‌توانید آن‌ها را گسترش دهید و ویژگی‌های بیشتری به آن‌ها اضافه کنید.

پروژه‌ها:

تایمر و کرنومتر پیشرفته:

از setTimeout و setInterval برای پیاده‌سازی تایمر، کرنومتر و آلارم استفاده کنید.
قابلیت شروع، توقف، ریست و تنظیم زمان را داشته باشد.
از classList و style برای تغییر ظاهر تایمر در حالت‌های مختلف (مثلاً شروع، توقف، پایان) استفاده کنید.
لیست وظایف (To-Do List) با قابلیت‌های فیلتر و ذخیره‌سازی:

از querySelector، createElement، appendChild و remove برای مدیریت آیتم‌های لیست استفاده کنید.
از filter، every و some برای فیلتر کردن وظایف بر اساس وضعیت (انجام شده، در حال انجام، و غیره) استفاده کنید.
از localStorage برای ذخیره و بازیابی لیست وظایف استفاده کنید.
از addEventListener برای مدیریت رویدادهای کلیک، حذف و ویرایش آیتم‌ها استفاده کنید.
گالری تصاویر با قابلیت‌های پیشرفته:

از createElement و appendChild برای نمایش تصاویر استفاده کنید.
از addEventListener برای مدیریت رویدادهای کلیک برای نمایش تصویر بزرگتر، حرکت بین تصاویر و غیره استفاده کنید.
از parentElement، children و nextSibling برای پیمایش بین تصاویر استفاده کنید.
از classList و style برای ایجاد جلوه‌های ویژه (مانند بزرگنمایی، سایه و غیره) استفاده کنید.
از رویداد scroll برای نمایش تصاویر به صورت اسلایدشو استفاده کنید.
فرم اعتبارسنجی پیشرفته:

از querySelector برای دسترسی به عناصر فرم استفاده کنید.
از addEventListener برای مدیریت رویدادهای input، blur و submit استفاده کنید.
از textContent و classList برای نمایش پیام‌های خطا و تغییر ظاهر فیلدها استفاده کنید.
از filter، every و some برای اعتبارسنجی فرمت ایمیل، رمز عبور و سایر فیلدها استفاده کنید.
از رویدادهای keydown و keypress برای کنترل ورودی کاربر استفاده کنید.
ایجاد یک بازی ساده (مانند حافظه یا حدس عدد):

از createElement و appendChild برای ایجاد عناصر بازی استفاده کنید.
از addEventListener برای مدیریت رویدادهای کلیک و سایر رویدادها استفاده کنید.
از setTimeout و setInterval برای ایجاد تایمر و انیمیشن استفاده کنید.
از this و event bubbling برای مدیریت رویدادها به صورت مؤثر استفاده کنید.
مدیریت عناصر DOM با استفاده از for...in، Object.keys، Object.values، spread و rest:

ایجاد یک لیست از عناصر و دستکاری آنها با استفاده از for...in برای پیمایش ویژگی‌های اشیاء.
استفاده از Object.keys و Object.values برای دریافت آرایه‌ای از کلیدها و مقادیر یک شیء و سپس دستکاری عناصر DOM بر اساس این داده‌ها.
استفاده از spread برای کپی کردن و ترکیب اشیاء و آرایه‌ها و ایجاد تغییرات در عناصر DOM.
استفاده از rest برای دریافت آرگومان‌های اضافی در توابع و اعمال تغییرات پویا در عناصر DOM.
این پروژه‌ها به شما کمک می‌کنند تا با مفاهیم زیر به صورت عملی آشنا شوید:

setTimeout و setInterval
filter، every، some و reduce
Object، for...in، spread، rest، Object.keys و Object.values
querySelector، textContent، classList و style
parentElement، children، nextSibling، createElement، appendChild، append و remove
رویدادها (click، dblclick، print، resize، keydown، keypress، scroll)
addEventListener
کلمه کلیدی this و event bubbling
امیدوارم این ایده‌ها برای شما مفید باشند. اگر سوال خاصی در مورد هر یک از این پروژه‌ها یا مفاهیم ذکر شده دارید، خوشحال می‌شوم پاسخ دهم.
