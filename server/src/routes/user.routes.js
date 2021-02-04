const express = require('express');

const router = express.Router();

// Podemos filtrar por email a través de req.body.email
// localhost:3000/?email=my-email@whatever.com
router.post(
  '/',
  catcher(async (req, res, next) => {
    try {
      const { email } = req.body;

      if (!email) {
        throw new Error('Email field is required');
      }

      const user = await User.create({
        email,
      });

      res.status(200).json({ data: user });
    } catch (err) {
      // err.message = 'Email field is required'
      next(err); // Si next recibe un error de JS, salta al middleware de errores
    }
  })
);

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json({ data: user });
  } catch (err) {
    next(err); // Si next recibe un error de JS, salta al middleware de errores
  }
});

module.exports = router;
