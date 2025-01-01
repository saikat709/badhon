import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import User from '../models/User.model.js';
import * as AdminJSMongoose from '@adminjs/mongoose';
import session from 'express-session';
import Connect from 'connect-pg-simple';
import Profile from '../models/Profile.model.js';

// const Products = require('./models/products'); 

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const basicAdminJs = new AdminJS({
  resources: [ User, Profile ],
  
  rootPath: '/admin',
  dashboard: {
    handler: async () => {
      return { }; // No data needed
    },
    component: './CustomDashboard',
  },

  branding: {
    favicon: 'http://localhost:3000/images/blood.png',
    companyName: 'Badhon',
    logo: 'http://localhost:3000/images/blood.png',
    // theme: {
    //   colors: {
    //     primary100: '#ffcc00',
    //     hoverBg: '#f6f6f6',
    //   },
    // },
  }
});

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return DEFAULT_ADMIN
}

const ConnectSession = Connect(session);
const sessionStore = new ConnectSession({
  conObject: {
    connectionString: 'mongodb://127.0.0.1:30017/badhon',
    ssl: process.env.NODE_ENV === 'production',
  },
  tableName: 'session',
  createTableIfMissing: true,
})

// const basicAdminRouter = AdminJSExpress.buildRouter(basicAdminJs);
const basicAdminRouter = AdminJSExpress.buildAuthenticatedRouter(
  basicAdminJs,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'sessionsecret',
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: 'sessionsecret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'saikat',
    }
);

export default {  basicAdminJs, basicAdminRouter };
