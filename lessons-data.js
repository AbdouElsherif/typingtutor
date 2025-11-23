// بيانات الدروس - Lessons Data
const lessonsData = {
    english: [
        // Level 1: Home Row
        {
            level: 1,
            lesson: 1,
            title: "Home Row - ASDF",
            description: "Learn the left home row keys",
            keys: ['a', 's', 'd', 'f'],
            exercises: [
                "fff fff fff",
                "ddd ddd ddd",
                "sss sss sss",
                "aaa aaa aaa",
                "fds fds fds",
                "asdf asdf asdf",
                "fdsa fdsa fdsa"
            ],
            minAccuracy: 90,
            targetWPM: 15
        },
        {
            level: 1,
            lesson: 2,
            title: "Home Row - JKL;",
            description: "Learn the right home row keys",
            keys: ['j', 'k', 'l', ';'],
            exercises: [
                "jjj jjj jjj",
                "kkk kkk kkk",
                "lll lll lll",
                ";;; ;;; ;;;",
                "jkl jkl jkl",
                "jkl; jkl; jkl;",
                ";lkj ;lkj ;lkj"
            ],
            minAccuracy: 90,
            targetWPM: 15
        },
        {
            level: 1,
            lesson: 3,
            title: "Home Row - Complete",
            description: "Combine both hands on home row",
            keys: ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'],
            exercises: [
                "asdf jkl;",
                "fjfj dkdk slsl a;a;",
                "jfkd lsla ;sdf jkfa",
                "fall fall fall",
                "sad sad sad",
                "ask ask ask",
                "lass lass lass",
                "flask flask flask"
            ],
            minAccuracy: 90,
            targetWPM: 20
        },
        // Level 2: Top Row
        {
            level: 2,
            lesson: 1,
            title: "Top Row - QWER",
            description: "Add left top row keys",
            keys: ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f'],
            exercises: [
                "fff rfr fff",
                "ddd ede ddd",
                "sss wsw sss",
                "aaa qaq aaa",
                "wed wed wed",
                "ear ear ear",
                "read read read",
                "wear wear wear"
            ],
            minAccuracy: 88,
            targetWPM: 20
        },
        {
            level: 2,
            lesson: 2,
            title: "Top Row - UIOP",
            description: "Add right top row keys",
            keys: ['u', 'i', 'o', 'p', 'j', 'k', 'l', ';'],
            exercises: [
                "jjj uju jjj",
                "kkk iki kkk",
                "lll olo lll",
                ";;; p;p ;;;",
                "oil oil oil",
                "pup pup pup",
                "join join join",
                "loop loop loop"
            ],
            minAccuracy: 88,
            targetWPM: 20
        },
        {
            level: 2,
            lesson: 3,
            title: "Top Row - Complete",
            description: "Practice all top row keys",
            keys: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            exercises: [
                "type type type",
                "quite quite quite",
                "power power power",
                "route route route",
                "query query query",
                "your work is top quality",
                "we require proper input"
            ],
            minAccuracy: 88,
            targetWPM: 25
        },
        // Level 3: Bottom Row
        {
            level: 3,
            lesson: 1,
            title: "Bottom Row - ZXCV",
            description: "Add left bottom row keys",
            keys: ['z', 'x', 'c', 'v', 'a', 's', 'd', 'f'],
            exercises: [
                "aaa zaz aaa",
                "sss xsx sss",
                "ddd cdc ddd",
                "fff vfv fff",
                "zap zap zap",
                "vex vex vex",
                "cave cave cave",
                "exact exact exact"
            ],
            minAccuracy: 85,
            targetWPM: 25
        },
        {
            level: 3,
            lesson: 2,
            title: "Bottom Row - NM,.",
            description: "Add right bottom row keys",
            keys: ['n', 'm', ',', '.', 'j', 'k', 'l', ';'],
            exercises: [
                "jjj njn jjj",
                "kkk mkm kkk",
                "lll ,l, lll",
                ";;; .;. ;;;",
                "moon moon moon",
                "man, man, man,",
                "name. name. name.",
                "noon, moon. soon."
            ],
            minAccuracy: 85,
            targetWPM: 25
        },
        {
            level: 3,
            lesson: 3,
            title: "All Letters Complete",
            description: "Practice all letter keys together",
            keys: ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'],
            exercises: [
                "the quick brown fox jumps over the lazy dog",
                "pack my box with five dozen liquor jugs",
                "how vexingly quick daft zebras jump",
                "amazingly few discotheques provide jukeboxes"
            ],
            minAccuracy: 85,
            targetWPM: 30
        },
        // Level 4: Numbers and Symbols
        {
            level: 4,
            lesson: 1,
            title: "Numbers Row",
            description: "Practice numbers 1-5",
            keys: ['1', '2', '3', '4', '5'],
            exercises: [
                "111 222 333 444 555",
                "123 234 345 451 512",
                "the year 2024 or 2025",
                "add 123 and 321",
                "room 405 or 504"
            ],
            minAccuracy: 85,
            targetWPM: 30
        },
        {
            level: 4,
            lesson: 2,
            title: "Numbers Complete",
            description: "Practice all numbers 0-9",
            keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            exercises: [
                "6789 7890 8901 9012",
                "phone: 555-1234",
                "year 1990 to 2024",
                "add 678 and 789",
                "pin code 1357 or 2468"
            ],
            minAccuracy: 85,
            targetWPM: 30
        },
        // Level 5: Real Practice
        {
            level: 5,
            lesson: 1,
            title: "Sentences Practice",
            description: "Type complete sentences",
            exercises: [
                "Practice makes perfect when learning to type.",
                "The quick brown fox jumps over the lazy dog.",
                "Touch typing helps you work faster and smarter.",
                "Keep your eyes on the screen, not the keyboard.",
                "Regular practice will improve your typing speed."
            ],
            minAccuracy: 90,
            targetWPM: 35
        },
        {
            level: 5,
            lesson: 2,
            title: "Paragraph Practice",
            description: "Type longer texts",
            exercises: [
                "Touch typing is a valuable skill in today's digital world. It allows you to type without looking at the keyboard, which increases both speed and accuracy. With regular practice, anyone can master this skill.",
                "Learning to type properly takes time and patience. Start with the home row keys and gradually add more keys as you become comfortable. Focus on accuracy first, and speed will naturally follow."
            ],
            minAccuracy: 92,
            targetWPM: 40
        }
    ],
    
    arabic: [
        // المستوى 1: الصف الرئيسي
        {
            level: 1,
            lesson: 1,
            title: "الصف الرئيسي - يد اليسار",
            description: "تعلم مفاتيح اليد اليسرى",
            keys: ['ش', 'س', 'ي', 'ب'],
            exercises: [
                "ببب ببب ببب",
                "ييي ييي ييي",
                "سسس سسس سسس",
                "ششش ششش shshش",
                "بيس بيس بيس",
                "شسيب شسيب شسيب",
                "بيسش بيسش بيسش"
            ],
            minAccuracy: 90,
            targetWPM: 15
        },
        {
            level: 1,
            lesson: 2,
            title: "الصف الرئيسي - يد اليمين",
            description: "تعلم مفاتيح اليد اليمنى",
            keys: ['ن', 'ت', 'م', 'ك'],
            exercises: [
                "ننن ننن ننن",
                "تتت تتت تتت",
                "ممم ممم ممم",
                "ككك ككك ككك",
                "نتم نتم نتم",
                "نتمك نتمك نتمك",
                "كمتن كمتن كمتن"
            ],
            minAccuracy: 90,
            targetWPM: 15
        },
        {
            level: 1,
            lesson: 3,
            title: "الصف الرئيسي - كامل",
            description: "دمج اليدين على الصف الرئيسي",
            keys: ['ش', 'س', 'ي', 'ب', 'ن', 'ت', 'م', 'ك'],
            exercises: [
                "شسيب نتمك",
                "بن بن بن",
                "يت يت يت",
                "سم سم سم",
                "شك شك شك",
                "بنت بنت بنت",
                "يمين يمين يمين",
                "شمس شمس شمس",
                "سكين سكين سكين"
            ],
            minAccuracy: 90,
            targetWPM: 20
        },
        // المستوى 2: حروف إضافية
        {
            level: 2,
            lesson: 1,
            title: "إضافة حروف - اليد اليسرى",
            description: "إضافة ف، ق، ع",
            keys: ['ف', 'ق', 'ع', 'ش', 'س', 'ي', 'ب'],
            exercises: [
                "فيل فيل فيل",
                "قيس قيس قيس",
                "عيش عيش عيش",
                "فقس فقس فقس",
                "بيع بيع بيع",
                "فعل فعل فعل",
                "قفص قفص قفص"
            ],
            minAccuracy: 88,
            targetWPM: 20
        },
        {
            level: 2,
            lesson: 2,
            title: "إضافة حروف - اليد اليمنى",
            description: "إضافة ل، ا، ه",
            keys: ['ل', 'ا', 'ه', 'ن', 'ت', 'م', 'ك'],
            exercises: [
                "لما لما لما",
                "انا انا انا",
                "هنا هنا هنا",
                "لكن لكن لكن",
                "ماما ماما ماما",
                "كلام كلام كلام",
                "الان الان الان"
            ],
            minAccuracy: 88,
            targetWPM: 20
        },
        {
            level: 2,
            lesson: 3,
            title: "كلمات بسيطة",
            description: "تمرين على كلمات كاملة",
            keys: ['ش','س','ي','ب','ن','ت','ا','ل','م','ك','ف','ق','ع','ه'],
            exercises: [
                "بيت كبير",
                "شمس ساطعة",
                "قلم وكتاب",
                "فيل كبير",
                "علم نافع",
                "انا اكتب بسرعة",
                "الكتابة مهارة مفيدة"
            ],
            minAccuracy: 88,
            targetWPM: 25
        },
        // المستوى 3: جميع الحروف
        {
            level: 3,
            lesson: 1,
            title: "حروف إضافية - المجموعة الأولى",
            description: "إضافة ر، و، ى، ة",
            keys: ['ر', 'و', 'ى', 'ة'],
            exercises: [
                "ريم ريم ريم",
                "ورد ورد ورد",
                "على على على",
                "كرة كرة كرة",
                "روعة روعة روعة",
                "قوة قوة قوة"
            ],
            minAccuracy: 85,
            targetWPM: 25
        },
        {
            level: 3,
            lesson: 2,
            title: "حروف إضافية - المجموعة الثانية",
            description: "إضافة ء، ؤ، ئ، ذ، د، ز، ط، ظ",
            keys: ['ء', 'ذ', 'د', 'ز', 'ط', 'ظ'],
            exercises: [
                "ذهب ذهب ذهب",
                "دار دار دار",
                "زهر زهر زهر",
                "طير طير طير",
                "ظل ظل ظل",
                "درس مفيد",
                "زمن ذهبي"
            ],
            minAccuracy: 85,
            targetWPM: 25
        },
        {
            level: 3,
            lesson: 3,
            title: "جميع الحروف",
            description: "تمرين على جميع الحروف",
            exercises: [
                "الحروف الهجائية ثمانية وعشرون حرفا",
                "نحن نتعلم الكتابة السريعة",
                "المهارة تأتي مع الممارسة المستمرة",
                "التركيز على الدقة قبل السرعة"
            ],
            minAccuracy: 85,
            targetWPM: 30
        },
        // المستوى 4: الأرقام والرموز
        {
            level: 4,
            lesson: 1,
            title: "الأرقام العربية",
            description: "تعلم كتابة الأرقام",
            keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            exercises: [
                "١٢٣ ٤٥٦ ٧٨٩",
                "العام ٢٠٢٤ أو ٢٠٢٥",
                "رقم الهاتف ٥٥٥-١٢٣٤",
                "الصفحة ١٠٥ من ٣٠٠",
                "المجموع ٩٨٧ زائد ٦٥٤"
            ],
            minAccuracy: 85,
            targetWPM: 25
        },
        {
            level: 4,
            lesson: 2,
            title: "علامات الترقيم",
            description: "علامات الترقيم العربية",
            exercises: [
                "السلام عليكم، كيف حالك؟",
                "أنا بخير، والحمد لله!",
                "هل أنت مستعد؟ نعم، أنا جاهز.",
                "الكتابة مهمة: سرعة ودقة.",
                "قال الحكيم: \"العلم نور\"."
            ],
            minAccuracy: 85,
            targetWPM: 30
        },
        // المستوى 5: التطبيق العملي
        {
            level: 5,
            lesson: 1,
            title: "تمرين على الجمل",
            description: "جمل كاملة ومفيدة",
            exercises: [
                "الممارسة المستمرة تؤدي إلى الإتقان.",
                "تعلم الكتابة باللمس مهارة مهمة.",
                "السرعة تأتي بعد إتقان الدقة.",
                "لا تنظر إلى لوحة المفاتيح أثناء الكتابة.",
                "التدريب اليومي يحسن مهاراتك."
            ],
            minAccuracy: 90,
            targetWPM: 35
        },
        {
            level: 5,
            lesson: 2,
            title: "تمرين على الفقرات",
            description: "فقرات طويلة",
            exercises: [
                "الكتابة باللمس هي مهارة قيمة في عصرنا الرقمي. تتيح لك الكتابة دون النظر إلى لوحة المفاتيح، مما يزيد من السرعة والدقة. مع الممارسة المنتظمة، يمكن لأي شخص إتقان هذه المهارة.",
                "تعلم الكتابة الصحيحة يتطلب وقتاً وصبراً. ابدأ بمفاتيح الصف الرئيسي وأضف المزيد من المفاتيح تدريجياً. ركز على الدقة أولاً، والسرعة ستتبع بشكل طبيعي."
            ],
            minAccuracy: 92,
            targetWPM: 40
        }
    ]
};
