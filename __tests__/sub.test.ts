import sub from '../src/sub'
import 'jest';
import { basicCalcul } from '../src/calcul'
import { prixLivres, prixPanier } from '../src/livre'

describe('sub', () => {
  describe("exaggerate", () => {
    test("add '!' to the end the designated number times", () => {
      expect(sub.exaggerate('Yippee', 8)).toBe('Yippee!!!!!!!!')
    })
  })
})

describe('basicCalcul', () => {
  test("test that 2 + 2 = 4", () => {
    expect(basicCalcul()).toBe(4)
    
  })
})

describe('Harry Potter', () => {
  test("Un panier vide ne vaut rien", () => {
    //Given
    const panier_vide = 0;
    //When
    const prix_panier = prixLivres(panier_vide);
    //Then
    const prix_panier_vide = 0;
    expect(prix_panier).toBe(prix_panier_vide);
  });

  test("Un tome seul vaut 8 euros", () => {
    //Given
    const un_seul_tome = 1;
    //When
    const prix_panier = prixLivres(un_seul_tome);
    //Then
    const prix_panier_un_seul_tome = 8;
    expect(prix_panier).toBe(prix_panier_un_seul_tome);
  });

  test("Deux tomes identiques valent 16 euros", () => {
    //Given
    const deux_tomes_identiques = 2;
    //When
    const prix_panier = prixLivres(deux_tomes_identiques);
    //Then
    const prix_panier_total = 16;
    expect(prix_panier).toBe(prix_panier_total);
  });

  test("Deux tomes différent valent 16 euros - 5%", () => {
    //Given
    const contenu_panier = 2;
    const nombre_livres_differents = 2;
    //When
    const prix_panier = prixLivres(contenu_panier, nombre_livres_differents);
    //Then
    const prix_panier_total = 16 - (16/100 * 5);
    expect(prix_panier).toBe(prix_panier_total);
  });

  test("Trois tomes identiques valent 24 euros", () => {
    //Given
    const contenu_panier = 3;
    const nombre_livres_differents = 1;
    //When
    const prix_panier = prixLivres(contenu_panier, nombre_livres_differents);
    //Then
    const prix_panier_total = 24;
    expect(prix_panier).toBe(prix_panier_total);
  });

  test("Trois tomes différents valent 24 euros - 10%", () => {
    //Given
    const contenu_panier = 3;
    const nombre_livres_differents = 3;
    //When
    const prix_panier = prixLivres(contenu_panier, nombre_livres_differents);
    //Then
    const prix_panier_total = 24 - (24/100 * 10);
    expect(prix_panier).toBe(prix_panier_total);
  });

  test("Le Tome 2, 3 et 5 valent 24 euros - 10%", () => {
    //Given
    const panier = {
      "tome1": 0,
      "tome2": 1,
      "tome3": 1, 
      "tome4": 0,
      "tome5": 1
    }
    //When
    const prix_panier = prixPanier(panier);
    //Then
    const prix_panier_total = 24 - (24/100 * 10);
    expect(prix_panier).toBe(prix_panier_total)
  })

  test("Le Tome 1, 2 et 3 et 4 valent 32 euros - 20%", () => {
    //Given
    const panier = {
      "tome1": 1,
      "tome2": 1,
      "tome3": 1, 
      "tome4": 1,
      "tome5": 0
    }
    //When
    const prix_panier = prixPanier(panier);
    //Then
    const prix_panier_total = 32 - (32/100 * 20);
    expect(prix_panier).toBe(prix_panier_total)
  })

  test("Le Tome 1, 2, 3, 4 et 5 valent 40 euros - 25%", () => {
    //Given
    const panier = {
      "tome1": 1,
      "tome2": 1,
      "tome3": 1, 
      "tome4": 1,
      "tome5": 1
    }
    //When
    const prix_panier = prixPanier(panier);
    //Then
    const prix_panier_total = 40 - (40/100 * 25);
    expect(prix_panier).toBe(prix_panier_total)
  })

  test("10x le Tome 1 et 15x le Tome 2 valent 25x8 - 5%", () => {
    //Given
    const panier = {
      "tome1": 10,
      "tome2": 15,
      "tome3": 0, 
      "tome4": 0,
      "tome5": 0
    }
    //When
    const prix_panier = prixPanier(panier);
    //Then
    const prix_panier_total = 25 * 8 - ((25 * 8)/100 * 5);
    expect(prix_panier).toBe(prix_panier_total)
  })

  test("Un panier vide ne vaut rien", () => {
    //Given
    const panier = {
      "tome1": 0,
      "tome2": 0,
      "tome3": 0, 
      "tome4": 0,
      "tome5": 0
    }
    //When
    const prix_panier = prixPanier(panier);
    //Then
    const prix_panier_total = 0;
    expect(prix_panier).toBe(prix_panier_total)
  })

})

/*
- Un tome vaut 8 euros
- Deux tomes différents valent 16euros - 5%
- Deux tomes identiques valent 16 euros
- Trois tomes différents valent 24 euros - 10%
- Trois tomes identiques valent 24 euros
- etc... jusqu'à 5
- Aucun tome acheté ne vaut 0 euro
- 




*/