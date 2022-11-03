export class Transaction {
    date: string;
    montant: number;
    solde: number;

    constructor(montant: number, solde: number) {
        const date_du_jour = new Date();
        this.date = date_du_jour.toLocaleDateString('fr-FR');
        this.montant = montant;
        this.solde = solde;
    }
}

export default class Compte {
    solde: number;
    historique: Transaction[];
    

    constructor(solde_initial = 0) {
        this.solde = solde_initial;
        this.historique = [];
    }

    depot(montant: number) {
        if (montant < 0)
          return "Montant invalide"
        this.solde += montant;
        const transaction = new Transaction (montant, this.solde)
        this.historique.push(transaction)
    }

    retrait(montant: number){
        if (montant < 0)
          return "Montant invalide"
        if (this.solde - montant < -100)
          return "Vous êtes à découvert"
        this.solde -= montant;
    }
}