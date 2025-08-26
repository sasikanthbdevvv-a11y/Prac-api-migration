/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
module.exports.routes = {
  "GET /health": "HealthController.check",
  "GET /time": "TimeController.now",
  "POST /user": "UserController.create",
  "GET /user": "UserController.find",
  "GET /user/findByEmail": "UserController.findByEmail",
};
