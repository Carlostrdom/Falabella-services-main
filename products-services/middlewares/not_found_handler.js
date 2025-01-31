const not_found_handler = (req, res, next) => {
    console.warn(`Solicitud no válida: método ${req.method} en la ruta ${req.url}`);

    return res.status(400).json({
        success: false,
        error: {
            code: 400,
            message: `La solicitud con el método ${req.method} en la ruta ${req.url} no es válida o no existe.`,
        }
    });
}

export default not_found_handler