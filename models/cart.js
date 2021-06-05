let cart = null;

module.exports = class Cart {

    static save(tutor) {

        if (cart === null) {
            cart = { tutors: [], totalRate: 0 };
        }

        const existingProductIndex = cart.tutors.findIndex(p => p.id == tutor.id); // to check tutor is existing in cart
        if (existingProductIndex >= 0) { // exist in cart already
            const exsitingProduct = cart.tutors[existingProductIndex];
            exsitingProduct.qty += 1;
        } else { //not exist
            tutor.qty = 1;
            cart.tutors.push(tutor);
        }

        cart.totalPrice += tutor.rate;
    }

    static getCart() {
        return cart;
    }

    static delete(productId) {
        const isExisting = cart.tutors.findIndex(p => p.id == productId);
        if (isExisting >= 0) {
            cart.tutors.splice(isExisting, 1);
        }
    }

}