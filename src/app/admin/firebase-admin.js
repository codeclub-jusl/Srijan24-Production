import {initializeApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth'
import {getDatabase} from 'firebase-admin/database'

// Initialize the default app
const defaultApp = initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // '[DEFAULT]'

const defaultAuth = getAuth(defaultApp);
const defaultDatabase = getDatabase(defaultApp);

export {defaultAuth, defaultDatabase}
