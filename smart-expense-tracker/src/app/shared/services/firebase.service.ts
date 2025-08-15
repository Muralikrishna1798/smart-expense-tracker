import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  async addExpense(data: any) {
    const colRef = collection(this.firestore, 'expenses');
    return addDoc(colRef, data);
  }

  async getExpenses() {
    const colRef = collection(this.firestore, 'expenses');
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
