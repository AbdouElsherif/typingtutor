// تخطيطات لوحة المفاتيح - Keyboard Layouts

const keyboardLayouts = {
    english: {
        rows: [
            // Number row
            [
                { key: '`', finger: 'left-pinky' },
                { key: '1', finger: 'left-pinky' },
                { key: '2', finger: 'left-ring' },
                { key: '3', finger: 'left-middle' },
                { key: '4', finger: 'left-index' },
                { key: '5', finger: 'left-index' },
                { key: '6', finger: 'right-index' },
                { key: '7', finger: 'right-index' },
                { key: '8', finger: 'right-middle' },
                { key: '9', finger: 'right-ring' },
                { key: '0', finger: 'right-pinky' },
                { key: '-', finger: 'right-pinky' },
                { key: '=', finger: 'right-pinky' }
            ],
            // Top row
            [
                { key: 'q', finger: 'left-pinky' },
                { key: 'w', finger: 'left-ring' },
                { key: 'e', finger: 'left-middle' },
                { key: 'r', finger: 'left-index' },
                { key: 't', finger: 'left-index' },
                { key: 'y', finger: 'right-index' },
                { key: 'u', finger: 'right-index' },
                { key: 'i', finger: 'right-middle' },
                { key: 'o', finger: 'right-ring' },
                { key: 'p', finger: 'right-pinky' },
                { key: '[', finger: 'right-pinky' },
                { key: ']', finger: 'right-pinky' },
                { key: '\\', finger: 'right-pinky' }
            ],
            // Home row
            [
                { key: 'a', finger: 'left-pinky', isHome: true },
                { key: 's', finger: 'left-ring', isHome: true },
                { key: 'd', finger: 'left-middle', isHome: true },
                { key: 'f', finger: 'left-index', isHome: true, hasBump: true },
                { key: 'g', finger: 'left-index' },
                { key: 'h', finger: 'right-index' },
                { key: 'j', finger: 'right-index', isHome: true, hasBump: true },
                { key: 'k', finger: 'right-middle', isHome: true },
                { key: 'l', finger: 'right-ring', isHome: true },
                { key: ';', finger: 'right-pinky', isHome: true },
                { key: '\'', finger: 'right-pinky' }
            ],
            // Bottom row
            [
                { key: 'z', finger: 'left-pinky' },
                { key: 'x', finger: 'left-ring' },
                { key: 'c', finger: 'left-middle' },
                { key: 'v', finger: 'left-index' },
                { key: 'b', finger: 'left-index' },
                { key: 'n', finger: 'right-index' },
                { key: 'm', finger: 'right-index' },
                { key: ',', finger: 'right-middle' },
                { key: '.', finger: 'right-ring' },
                { key: '/', finger: 'right-pinky' }
            ],
            // Space row
            [
                { key: 'Space', finger: 'thumb', isWide: true }
            ]
        ],
        fingerColors: {
            'left-pinky': '#ff6b6b',
            'left-ring': '#4ecdc4',
            'left-middle': '#45b7d1',
            'left-index': '#96ceb4',
            'thumb': '#95a5a6',
            'right-index': '#ffeaa7',
            'right-middle': '#dfe6e9',
            'right-ring': '#a29bfe',
            'right-pinky': '#fd79a8'
        }
    },

    arabic: {
        rows: [
            // Number row
            [
                { key: 'ذ', finger: 'left-pinky' },
                { key: '1', finger: 'left-pinky' },
                { key: '2', finger: 'left-ring' },
                { key: '3', finger: 'left-middle' },
                { key: '4', finger: 'left-index' },
                { key: '5', finger: 'left-index' },
                { key: '6', finger: 'right-index' },
                { key: '7', finger: 'right-index' },
                { key: '8', finger: 'right-middle' },
                { key: '9', finger: 'right-ring' },
                { key: '0', finger: 'right-pinky' },
                { key: '-', finger: 'right-pinky' },
                { key: '=', finger: 'right-pinky' }
            ],
            // Top row
            [
                { key: 'ض', finger: 'left-pinky' },
                { key: 'ص', finger: 'left-ring' },
                { key: 'ث', finger: 'left-middle' },
                { key: 'ق', finger: 'left-index' },
                { key: 'ف', finger: 'left-index' },
                { key: 'غ', finger: 'right-index' },
                { key: 'ع', finger: 'right-index' },
                { key: 'ه', finger: 'right-middle' },
                { key: 'خ', finger: 'right-ring' },
                { key: 'ح', finger: 'right-pinky' },
                { key: 'ج', finger: 'right-pinky' },
                { key: 'د', finger: 'right-pinky' }
            ],
            // Home row
            [
                { key: 'ش', finger: 'left-pinky', isHome: true },
                { key: 'س', finger: 'left-ring', isHome: true },
                { key: 'ي', finger: 'left-middle', isHome: true },
                { key: 'ت', finger: 'left-index', isHome: true, hasBump: true },
                { key: 'ل', finger: 'left-index' },
                { key: 'ا', finger: 'right-index' },
                { key: 'ب', finger: 'right-index', isHome: true, hasBump: true },
                { key: 'ن', finger: 'right-middle', isHome: true },
                { key: 'م', finger: 'right-ring', isHome: true },
                { key: 'ك', finger: 'right-pinky', isHome: true },
                { key: 'ط', finger: 'right-pinky' }
            ],
            // Bottom row
            [
                { key: 'ئ', finger: 'left-pinky' },
                { key: 'ء', finger: 'left-ring' },
                { key: 'ؤ', finger: 'left-middle' },
                { key: 'ر', finger: 'left-index' },
                { key: 'لا', finger: 'left-index' },
                { key: 'ى', finger: 'right-index' },
                { key: 'ة', finger: 'right-index' },
                { key: 'و', finger: 'right-middle' },
                { key: 'ز', finger: 'right-ring' },
                { key: 'ظ', finger: 'right-pinky' }
            ],
            // Space row
            [
                { key: 'مسافة', finger: 'thumb', isWide: true }
            ]
        ],
        fingerColors: {
            'left-pinky': '#ff6b6b',
            'left-ring': '#4ecdc4',
            'left-middle': '#45b7d1',
            'left-index': '#96ceb4',
            'thumb': '#95a5a6',
            'right-index': '#ffeaa7',
            'right-middle': '#dfe6e9',
            'right-ring': '#a29bfe',
            'right-pinky': '#fd79a8'
        }
    }
};

// Helper function to get finger for a specific key
function getFingerForKey(key, language) {
    const layout = keyboardLayouts[language];
    for (let row of layout.rows) {
        for (let keyObj of row) {
            if (keyObj.key.toLowerCase() === key.toLowerCase()) {
                return keyObj.finger;
            }
        }
    }
    return null;
}

// Helper function to get color for a finger
function getColorForFinger(finger, language) {
    return keyboardLayouts[language].fingerColors[finger] || '#95a5a6';
}
