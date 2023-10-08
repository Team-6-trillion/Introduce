// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// firebase 기본 설정
const firebaseConfig = {
  apiKey: "AIzaSyDEWEjv67IvpR3JGcPZ2L3db5DPUIj9nhI",
  authDomain: "jojo-introduce.firebaseapp.com",
  projectId: "jojo-introduce",
  storageBucket: "jojo-introduce.appspot.com",
  messagingSenderId: "252364746356",
  appId: "1:252364746356:web:863d03aece948ce960ab21",
  measurementId: "G-ZH9BZ6K9RN",
};
// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 여기까지..
