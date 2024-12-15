// Menyimpan data ke database
import { auth } from '../auth/firebase/config.js';
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const db = getDatabase();