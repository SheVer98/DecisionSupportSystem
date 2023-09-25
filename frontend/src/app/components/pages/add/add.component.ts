import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/shared/models/Car';


interface Itemset {
  items: string[];
  support: number;
}

interface Rule {
  antecedent: string[];
  consequent: string[];
  support: number;
  confidence: number;
}


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cars:Car[]=[];
  rules: Rule[] = []; // Reguły asocjacyjne
  transactions: string[][] = [];

  generateAssociationRules(): void {
    this.transactions= this.convertCarsToTransactions();

    // Generuj częste pojedyncze elementy
    const minSupport = 0.5;

    // Generuj częste pojedyncze elementy
    const frequentItems: Itemset[] = this.getFrequentItems(this.transactions, minSupport);

    // Generuj reguły asocjacyjne
    this.rules = this.generateRules(frequentItems);

    // Wyświetl wyniki
    console.log(this.rules);
  }


  private convertCarsToTransactions(): string[][] {
    // Konwertuj dane samochodów na transakcje
    const transactions: string[][] = [];

    for (const car of this.cars) {
      const transaction: string[] = [];

      // Przypisz etykiety na podstawie stopni przynależności
      transaction.push(this.getLabelForMembershipDegree(car.cena, 'cena'));
      transaction.push(this.getLabelForMembershipDegree(car.moc, 'moc'));
      transaction.push(this.getLabelForMembershipDegree(car.pojemnosc, 'pojemnosc'));

      transactions.push(transaction);
    }

    return transactions;
  }

  private getLabelForMembershipDegree(value: number, variable: string): string {
    // Logika przypisywania etykiet na podstawie stopni przynależności
    // ...
    const label: string='';
    return label; // Zwróć odpowiednią etykietę
  }

  // Generuje częste pojedyncze elementy
  private getFrequentItems(transactions: string[][], minSupport: number): Itemset[] {
    const itemSupportMap: Map<string, number> = new Map();

    // Oblicz wsparcie dla każdego pojedynczego elementu
    for (const transaction of transactions) {
      for (const item of transaction) {
        if (!itemSupportMap.has(item)) {
          itemSupportMap.set(item, 0);
        }
        itemSupportMap.set(item, (itemSupportMap.get(item) || 0) + 1);
      }
    }

    // Filtruj elementy, których wsparcie jest większe niż minSupport
    const frequentItems: Itemset[] = [];
    for (const [item, support] of itemSupportMap.entries()) {
      if (support / transactions.length >= minSupport) {
        frequentItems.push({ items: [item], support: support / transactions.length });
      }
    }

    return frequentItems;
  }




  private generateRules(frequentItems: Itemset[]): Rule[] {
    const rules: Rule[] = [];

    // Generuj reguły dla kombinacji elementów
    for (let i = 0; i < frequentItems.length; i++) {
      const itemsetA = frequentItems[i].items;
      const supportA = frequentItems[i].support;

      for (let j = i + 1; j < frequentItems.length; j++) {
        const itemsetB = frequentItems[j].items;
        const supportB = frequentItems[j].support;

        // Twórz nowe reguły przez łączenie elementów z A i B
        const newRules = this.generateRulesFromItemsets(itemsetA, itemsetB, supportA, supportB);

        // Dodaj nowe reguły do ogólnej listy reguł
        rules.push(...newRules);
      }
    }

    return rules;
  }

  private generateRulesFromItemsets(itemsetA: string[], itemsetB: string[], supportA: number, supportB: number): Rule[] {
    const rules: Rule[] = [];

    // Generuj reguły dla itemsetA -> itemsetB
    const ruleAB: Rule = {
      antecedent: itemsetA,
      consequent: itemsetB,
      support: supportA,
      confidence: supportA / supportB
    };

    // Sprawdź warunek na ufność dla reguły
    if (ruleAB.confidence >= 0.7) {
      rules.push(ruleAB);
    }

    // Generuj reguły dla itemsetB -> itemsetA
    const ruleBA: Rule = {
      antecedent: itemsetB,
      consequent: itemsetA,
      support: supportB,
      confidence: supportB / supportA
    };

    // Sprawdź warunek na ufność dla reguły
    if (ruleBA.confidence >= 0.7) {
      rules.push(ruleBA);
    }

    return rules;
  }


  // ... Pozostała część klasy









   ngOnInit(): void {


}
}
