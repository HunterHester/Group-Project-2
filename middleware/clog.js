const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    const defaultColor = '\x1b[0m';
    switch (req.method) {
        case 'GET': {
            console.info(`📗 ${fgCyan}${req.method} request to ${req.path}${defaultColor}`);
            break;
          }
          case 'POST': {
            console.info(`📘 ${fgCyan}${req.method} request to ${req.path}${defaultColor}`);
            break;
          }
          default:
            console.log(`📙${fgCyan}${req.method} request to ${req.path}${defaultColor}`);
    }
      
    next();
};

module.exports = { clog };