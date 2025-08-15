import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './app.component.html',
     template: `
    <h1>Firebase Connection Test</h1>
    <p *ngIf="status">{{ status }}</p>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smart-expense-tracker';
  status = '';
  constructor(private firestore: Firestore) {}

  // async ngOnInit() {
  //   const colRef = collection(this.firestore, 'test');
  //   const snapshot = await getDocs(colRef);
  //   console.log(snapshot.docs.map(doc => doc.data()));
  // }
   async ngOnInit() {
    try {
      // Test: Fetch documents from "test" collection
      const colRef = collection(this.firestore, 'test');
      const snapshot = await getDocs(colRef);

      if (snapshot.empty) {
        this.status = 'Connected to Firestore ✅ (no data found)';
      } else {
        this.status = 'Connected to Firestore ✅';
        console.log('Fetched data:', snapshot.docs.map(doc => doc.data()));
      }
    } catch (error) {
      this.status = '❌ Firestore connection failed';
      console.error(error);
    }
  }
}
