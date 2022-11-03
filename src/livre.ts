export type panier = {
    "tome1": number,
    "tome2": number,
    "tome3": number,
    "tome4": number,
    "tome5": number,
}

const tableauReduction = [
    0, 0, 5, 10, 20, 25
]

export const prixPanier = (cart: panier) => {
    const nb_books = cart.tome1 + cart.tome2 + cart.tome3 + cart.tome4 + cart.tome5
    let nb_different_books = 0;
    Object.keys(cart).forEach(tome => {
        if (cart[tome] >= 1) nb_different_books++;
    })
    return prixLivres(nb_books, nb_different_books)
}

export const prixLivres = (nb_books: number, nb_different_books: number = 1): number => {
   const total = nb_books * 8;
   return total - (total / 100 * tableauReduction[nb_different_books])
}