const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const docsRoute = require("./docs.route");
const config = require("../../config/config");
const cityRoute = require('./city.route');
const businessRoute = require('./businesses.route');
const districtRoute = require('./district.route');
const wardRoute = require('./ward.route');
const industryRoute = require('./industry.route');
const businessesWardRoute = require('./businesses-ward.route')
const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute
  },
  {
    path: "/users",
    route: userRoute
  },
  {
    path: "/city",
    route: cityRoute
  },
  {
    path: "/businesses",
    route: businessRoute
  },
  {
    path: "/district",
    route: districtRoute
  },
  {
    path: '/wards',
    route:wardRoute
  },
  {
    path: '/industry',
    route: industryRoute
  },
  {
    path: '/businesses-wards',
    route: businessesWardRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
