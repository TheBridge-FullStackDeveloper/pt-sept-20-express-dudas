// * ¿Que diferencia hay entre el código que está fuera o dentro del try/catch? ¿Por qué?

try {
  const arr = [1, 2, 3, 4, 5];
  arr.split();
} catch (err) {
  // Entramos al catch siempre que rompa algo dentro del try
  console.log(err);
  console.log(err.message);
}

// Podemos filtrar por email a través de req.body.email
// localhost:3000/?email=my-email@whatever.com
router.post('/', async (req, res, next) => {
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
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json({ data: user });
  } catch (err) {
    next(err); // Si next recibe un error de JS, salta al middleware de errores
  }
});

app.use('/api', mainRouter);

// Gestor de rutas perdidas
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.code = 404;
  next(error);
});

// Middleware de errores de Express.
// 1. Solo hay UN middleware
// 2. Recibe cuatro argumentos err, req, res, next
app.use((err, req, res, next) => {
  console.log(err.message); // 'Route not found'
  console.log(err.code); // 404

  res
    .status(err.code || 500)
    .json({ message: err.message || 'Internal server error' });
});

// Mongoose => Peticiones a la DB
// JS => Generar errores customizados y hacer try/catch
// Express => Llamar a next(err) y enviar desde el middleware de errores una respuesta al cliente con ese error
