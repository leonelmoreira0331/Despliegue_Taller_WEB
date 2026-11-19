import express from 'express';
import { connection, Producto } from './database.js';

const app = express();
const port = 3000;
connection();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hola mundo")
})

app.post('/producto', async (req, res) => {
    try {
        //Paso 1
        //capturar entradas que llegan a backend
        //req.body
        const { foto, titulo, descripcion, precio, cantidad } = req.body;
        //Paso 2
        //Validaciones de longitud, datos vacios, tipos de datos,tockens,etc
        //Paso 3
        //Logica
        const newProducto = new Producto({
            foto,
            titulo,
            descripcion,
            precio,
            cantidad
        })
        await newProducto.save();
        //Paso4
        //Mensaje de respuesta
        res.status(201).json({
            mensaje: 'Producto creado exitosamente'
        });
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log("Servidor en el puerto", port)
})



app.use(express.json());
connection();

app.listen(app.get("port"), () => {console.log('SERVER ON');});