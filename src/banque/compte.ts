import {Transaction} from "./transaction";

export default class Compte {
    public solde: number;
    public historique: Transaction[];

    constructor(soldeInitial = 0) {
        this.solde = soldeInitial;
        this.historique = [];
    }

    public depot(montant: number) {
        if (montant < 0) {
            return "Montant invalide"
        }
        this.solde += montant;
        const transaction = new Transaction(montant, this.solde)
        this.historique.push(transaction)
    }

    public retrait(montant: number) {
        if (montant < 0) {
            return "Montant invalide"
        }
        if (this.solde - montant < -100) {
            return "Vous êtes à découvert"
        }
        this.solde -= montant;
    }
}