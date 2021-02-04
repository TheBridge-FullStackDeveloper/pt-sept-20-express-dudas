// const User = mongoose.model('User', userSchema)
// El modelo User de mongoose es una herramienta para introducir, leer,
// modificar o guardar datos en la colección users de MongoDB
// User => show collections => users

const User = require('../models/User');

// Funciones de Lectura
// MongoDB => db.users.find().pretty() => Shell o Compass
// Mongoose => User.find() => Nuestro código
// (MongoDB) => db.users.find({ _id: '128youbd90u9132' }).pretty();
// (Mongoose) => User.findById('128youbd90u9132');

// Funciones de Creación
// MongoDB => db.user.insertOne({ name: "Hola soy un user" })
// Mongoose => User.create({ name: "Hola soy un tweet" })
// Mongoose => {
//   const user = new User({ name: "Hola soy un tweet" })
//   await user.save()

//   return user
// }

// Funciones de Edición
// (MongoDB) =>
//   db.user.updateOne(
//     { _id: '123123123123123123123123' },
//     { $set: { surname: 'qwerty' } }
//   );
// (Mongoose) =>
//   User.findbyIdAndUpdate('123123123123123123123123', {
//     surname: 'qwerty',
//   });
// //
// (MongoDB) =>
//   db.user.updateOne(
//     { email: 'elisa@thebridge.es' },
//     { $set: { surname: 'qwerty' } }
//   );
// (Mongoose) =>
//   User.findOneAndUpdate(
//     { email: 'elisa@thebridge.es' },
//     {
//       surname: 'qwerty',
//     }
//   );

// Funciones de Borrado
// Mongo => db.user.deleteOne({ _id: "123123123123123123123123" })
// Mongoose =>
// User.deleteOne({ _id: "123123123123123123123123" })

// User.findByIdAndDelete("123123123123123123123123")
// User.findByOneAndDelete({ _id: "123123123123123123123123" })

// const user = User.findById("123123123123123123123123")
// user.delete()
