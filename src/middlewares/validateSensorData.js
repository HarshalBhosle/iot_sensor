module.exports = (req, res, next) => {
  const { deviceId, temperature } = req.body;

  if (!deviceId || typeof deviceId !== "string") {
    return res.status(400).json({
      message: "deviceId is required and must be a string",
    });
  }

  if (temperature === undefined || typeof temperature !== "number") {
    return res.status(400).json({
      message: "temperature is required and must be a number",
    });
  }

  next();
};