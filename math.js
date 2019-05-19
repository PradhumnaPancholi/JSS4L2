const calculate = (method, x, y) => {
    switch(method.toLowercase()) {
        case 'add':
            return {result: x+y}
        case 'subtract':
            return {result: x-y}
        case 'multiply':
            return {result: x*y}
        case 'divide':
            return {result: x/y}
        default:
            return 'This is not a valid option'
    }
}

//to verify that methods are valid//
const validOperators = ['add', 'subtract', 'multiply', 'divide']

//to handle route request//
const calculateRoute = (req, res) => {
    //to parse out values//
    req.query.x = parseInt(req.query.x)
    req.query.y = parseInt(req.query.y)

    const {method,x, y} = req.query

    //to check if both values are number//
    if(isNaN(x) || isNaN(y)){
        res.send('Both values must be a number')
    }

    if(!validOperators.includes(method.toLowercase())) {
        res.send('Not a valid operator')
    }

    const {operator, result} = calculate(method, x, y)
        res.send(`${x} ${y} = ${result}`)
}

module.exports = calculateRoute

