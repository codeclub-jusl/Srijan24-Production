import { credential } from 'firebase-admin';
import {applicationDefault, initializeApp, getApps, App} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth'
import {getDatabase} from 'firebase-admin/database'


const apps = getApps()

/**
 * @type {App}
 */
let defaultApp

for(const app of apps) {
    if(app.name === 'firebase_admin_app') {
        defaultApp = app
    }
}

if(!defaultApp) {
    // Initialize the default app
    defaultApp = initializeApp({
        // credential: applicationDefault(),
        credential: credential.cert({
            project_id: process.env.PROJECT_ID,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, "\n"),
            client_email: process.env.CLIENT_EMAIL
        }),
        databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL
    }, 'firebase_admin_app');
}

const defaultAuth = getAuth(defaultApp);
const defaultDatabase = getDatabase(defaultApp);

export {defaultAuth, defaultDatabase}
