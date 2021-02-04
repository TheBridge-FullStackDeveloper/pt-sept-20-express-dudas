// Usando el catcher podemos envolver un enpoint
// y luego invocarlo con (req, res, next).
// Con este, nos ahorramos el try/catch
const catcher = (callback) => (req, res, next) => {
  try {
    callback(req, res, next);
  } catch (err) {
    next(err);
  }
};

router.post(
  '/',
  catcher(async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
      throw new Error('Email field is required');
    }

    const user = await User.create({
      email,
    });

    res.status(200).json({ data: user });
  })
);
