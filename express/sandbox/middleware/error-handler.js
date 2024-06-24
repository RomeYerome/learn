
const errorHandler = (err, req, res, next) => {
    // console.error(err.stack);
    if (err.status)
        return res.status(err.status).json({ msg: err.message });

    res.status(500).json({ msg: err.message });
}

export default errorHandler;