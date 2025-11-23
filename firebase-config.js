// Firebase Configuration
// ⚠️ IMPORTANT: Replace these values with your actual Firebase project credentials
// Get them from: Firebase Console > Project Settings > General > Your apps > Web app

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app;
let db;
let auth;
let currentUserId = null;

try {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);

    // Initialize Firestore
    db = firebase.firestore();

    // Initialize Auth
    auth = firebase.auth();

    console.log('✅ Firebase initialized successfully');

    // Sign in anonymously
    auth.signInAnonymously()
        .then(() => {
            console.log('✅ Signed in anonymously');
        })
        .catch((error) => {
            console.error('❌ Anonymous sign-in error:', error);
        });

    // Listen for auth state changes
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUserId = user.uid;
            console.log('👤 User ID:', currentUserId);

            // Load progress when user is authenticated
            if (window.loadProgressFromFirebase) {
                window.loadProgressFromFirebase();
            }
        } else {
            console.log('👤 No user signed in');
            currentUserId = null;
        }
    });

} catch (error) {
    console.error('❌ Firebase initialization error:', error);
    console.log('⚠️ Falling back to localStorage');
}

// Helper function to check if Firebase is ready
function isFirebaseReady() {
    return db && currentUserId;
}
