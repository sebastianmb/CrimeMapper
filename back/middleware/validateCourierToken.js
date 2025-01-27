const validateCourierToken = (req, res, next) => {
    const token = req.headers['authorization']; // Lee el encabezado de autorización

    // Compara con un token predefinido
    if (token !== 'Bearer abc123-secure-token-xyz789') {
        return res.status(403).json({ message: 'Acceso denegado: token inválido' });
    }

    next(); // Pasa al siguiente middleware o controlador
};

module.exports = validateCourierToken;