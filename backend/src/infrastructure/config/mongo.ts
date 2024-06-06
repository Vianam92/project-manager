import mongoose from 'mongoose';

export async function connectedDB() {
  const { MONGODB_USER, MONGODB_PASS, MONGODB_APP_NAME } = process.env;

  const options: mongoose.ConnectOptions = {
    authSource: MONGODB_USER,
    auth: {
      username: MONGODB_USER,
      password: MONGODB_PASS,
    },
    connectTimeoutMS: 4000,
  };
  await mongoose
    .connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.uycwdth.mongodb.net/?retryWrites=true&w=majority&appName=${MONGODB_APP_NAME}`, options
    )
    .then(() => {
      console.log('✅ Connection with MongoDB established');
    });

  mongoose.connection.on('error', (error) => {
    console.log('❌ Error with MongoDB connection', error);
    process.exit(0);
  });
}

export async function disconnectFromDB() {
  mongoose.disconnect();
}
