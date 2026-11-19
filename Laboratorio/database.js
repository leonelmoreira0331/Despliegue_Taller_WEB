import mongoose from 'mongoose';

async function connection() {
    try {
        const {connection} = await mongoose.connect("mongodb://127.0.0.1:27017/producto");
        console.log(`Connection database is connected on ${connection.host} - ${connection.port}`);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    } catch (error) {
        console.log(error);
    }
}

const productoSchema = new mongoose.Schema({

    foto : {
        type : String,
        required : true,
        trim: true
    },
    titulo : {
        type : String,
        required : true,
        trim: true
    },
    descripcion : {
        type : String,
        required : true,
        trim : true
    },
    precio : {
        type : String,
        required : true,
        trim : true,
    },
    cantidad : {
        type : Number,
        required : true,
        trim : true
    }
})

const Producto = mongoose.model('Product',productoSchema)

export {
    connection,
    Producto
}