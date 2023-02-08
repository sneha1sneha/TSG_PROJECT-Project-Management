/**
 *
 * @param {Object} ProjectRoutes
 * @param {ExpressRouter} ProjectRoutes.router
 * @param {ProjectController} ProjectRoutes.ProjectController
 * @param {ProjectValidator} ProjectRoutes.ProjectValidator
 * @param {makeExpressCallback} ProjectRoutes.makeExpressCallback
 * @param {makeValidatorCallback} ProjectRoutes.makeValidatorCallback
 * @returns {ExpressRouter}
 */
 const authorization = require('../../middlewares/auth');
 module.exports = ({ router, ProjectController, ProjectValidator, makeValidatorCallback, makeExpressCallback }) => {
    console.log("/login/login/login")
   
    router.get('/tasklist/:id',authorization, makeExpressCallback(ProjectController.tasklist));

    router.get('/projectlist', authorization,makeExpressCallback(ProjectController.projectlist));

    router.get('/employeelist',authorization, makeExpressCallback(ProjectController.employeelist));

    router.get('/addproject',authorization, makeExpressCallback(ProjectController. addproject));


    router.post('/addtask', authorization,makeExpressCallback(ProjectController.addtask));
    router.get('/managetask',authorization,makeExpressCallback(ProjectController.managetask));
  
    return router;
  };

