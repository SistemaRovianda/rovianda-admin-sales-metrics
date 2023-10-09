import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/Auth.Service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private router:Router,private firebaseService:AuthService) { }
  username:string="";
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  closeSession(){
    this.firebaseService.signOut().subscribe(()=>{
      localStorage.clear();
        this.router.navigateByUrl("login");
    });
  }

}
