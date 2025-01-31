const notFoundHandler = (req, res, next) => {
    console.warn(`Ruta no encontrada: ${req.method} ${req.url}`);  // Agrega un log para detectar rutas no encontradas

    return res.status(404).json({
        success: false,
        error: {
            code: 404,
            message: `El método ${req.method} para la ruta ${req.url} no existe.`,
        }
    });
};

export default notFoundHandler;
