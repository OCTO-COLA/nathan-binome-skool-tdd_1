import 'jest';
import Compte, { Transaction } from '../src/banque'

describe('Ma Banque', () => {
    test("Mon compte contient 0€ quand je le créé", () => {
    //Given
    const compte = new Compte();
    //When
    const solde = compte.solde;
    //Then
    const solde_ouvertude = 0;
    expect(solde).toBe(solde_ouvertude)
    })

    test("Je créé mon compte avec un solde de départ de 100€ et il contient 100€", () => {
    //Given
    const compte = new Compte(100);
    //When
    const solde = compte.solde;
    //Then
    const solde_ouvertude = 100;
    expect(solde).toBe(solde_ouvertude)
    })

    test("Mon compte contient 1500€ quand je dépose 1500€ sur mon compte vide", () => {
    //Given
    const compte = new Compte();
    //When
    compte.depot(1500);
    const solde = compte.solde;
    //Then
    const solde_final = 1500;
    expect(solde).toBe(solde_final)
    })

    test("Je ne peux pas déposer sur mon compte un montant négatif", () => {
    //Given
    const compte = new Compte(100);
    //When
    compte.depot(-10);
    const solde = compte.solde;
    //Then
    const solde_final = 100;
    expect(solde).toBe(solde_final)
    })

    test("Je retire 500€ sur mon compte contenant 1500€, il me reste 1000€", () => {
    //Given
    const compte = new Compte(1500);
    //When
    compte.retrait(500);
    const solde = compte.solde;
    //Then
    const solde_final = 1000;
    expect(solde).toBe(solde_final)
    })

    test("Je ne peux pas retirer à mon compte un montant négatif", () => {
    //Given
    const compte = new Compte(1500);
    //When
    compte.retrait(-500);
    const solde = compte.solde;
    //Then
    const solde_final = 1500;
    expect(solde).toBe(solde_final)
    })

    test("Le découvert maximum est de -100€, je ne peux pas retirer 101€ à mon compte vide", () => {
    //Given
    const compte = new Compte();
    //When
    compte.retrait(101);
    const solde = compte.solde;
    //Then
    const solde_final = 0;
    expect(solde).toBe(solde_final)
    })
    
    test("Mon historique de transactions est vide lorsque je créé un nouveau compte", () => {
    //Given
    const compte = new Compte();
    //When
    const historique = compte.historique;
    //Then
    expect(historique).toEqual([])
    })

    test("Lorsque j'effectue un depot de 100€, l'historique se met a jour", () => {
    //Given
    const compte = new Compte();
    //When
    compte.depot(100)
    const historique = compte.historique;
    //Then
    const montant_transaction = 100;
    const solde_attendu = 100;
    const transaction = new Transaction(montant_transaction, solde_attendu);
    expect(historique).toEqual([transaction])
    })

    test("J'effectue un retrait 250€ sur mon compte, l'historique se met a jour ", () => {
    //Given
    const compte = new Compte();
    //When
    compte.depot(100)
    const historique = compte.historique;
    //Then
    const montant_transaction = 100;
    const solde_attendu = 100;
    const transaction = new Transaction(montant_transaction, solde_attendu);
    expect(historique).toEqual([transaction])
    })

  })
  
  

/*
=> Librairie de console

=> Caractéristiques d'un compte ?
=> Nom d'une personne
=> Identifiant de compte
=> Solde

=> Règles de dépot : Quantité max /
=> Découvert de 100

=> Liste d'historique (historique) Mettre a jour () Automatiquement retrait depot ? Voir l'histo
=> Historique vide à la base

=> liste d'objet Transaction
*/