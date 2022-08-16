const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('firs-name'),
    body('last-name'),
    body('email').isEmail(),
    body('password')
        .isLength({min: 3, max: 32}),
    body('confirmPassword'),
    userController.registration
)
;

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router
