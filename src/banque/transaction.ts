export class Transaction {
    public date: string;
    public montant: number;
    public solde: number;

    constructor(montant: number, solde: number) {
        const dateDuJour = new Date();
        this.date = dateDuJour.toLocaleDateString('fr-FR');
        this.montant = montant;
        this.solde = solde;
    }
}