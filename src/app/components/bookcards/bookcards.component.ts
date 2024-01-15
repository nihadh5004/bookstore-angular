import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcards',
  templateUrl: './bookcards.component.html',
  styleUrls: ['./bookcards.component.css']
})
export class BookcardsComponent {
  @Input() bookData: any;
  constructor(private router: Router) { }

  goDetail(id: string): void {
    console.log(id);
    this.router.navigate(['bookdetail', id]);
  }
}
