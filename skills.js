function calculateNumbers(var1, var2) {
    // Check if both inputs are numbers
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }

    // Perform calculations
    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var2 !== 0 ? var1 / var2 : 'undefined (division by zero)';

    // Return results as an object
    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}