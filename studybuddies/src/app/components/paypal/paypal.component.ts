import { Component, OnInit } from "@angular/core";
import { ICreateOrderRequest } from "ngx-paypal";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { NgxPayPalModule } from 'ngx-paypal';
import { RoomService } from "src/app/services/class.service";
import { Observable, Subscription } from "rxjs";
import { PaypalService } from "src/app/services/paypal.service";
import Swal from 'sweetalert2'
import { TokenStorageService } from "src/app/services/token-storage.service";
import { PriceService } from "src/app/services/price.service";


@Component({
  selector: "app-paypal",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.css"]
})
export class PaypalComponent implements OnInit {
  public payPalConfig: any;
  public showPaypalButtons: boolean;
  guid: any;
  totalPrice: string
  desc: boolean;
  paid: boolean
  id_user_app = this.auth.getId();
  puntos: number = 0;
  user: any;

  message:string;
  subscription: Subscription;

  constructor(public tokenStorageService: TokenStorageService, public paypalService: PaypalService, private routes: ActivatedRoute, public auth: AuthService, public http: HttpClient, private ng_pay: NgxPayPalModule, private priceService: PriceService) {
    this.auth.getId()
  }

  ngOnInit() {
    this.priceService.getMessage().subscribe(message => this.totalPrice = message)
    console.log(this.totalPrice)

    if(this.totalPrice.indexOf("desc")>0){
      this.desc = true;
      this.totalPrice = this.totalPrice.split("-", 2)[1];
      console.log(this.desc);
      console.log(this.totalPrice);
    }

    this.user = this.tokenStorageService.getUser();
    if(this.user){
      this.puntos = this.tokenStorageService.getUser().puntos;
    }
    this.showPaypalButtons = true;
    this.payPalConfig = {
      currency: "EUR",
      clientId: "ATRvi--QaPw0iferJZWGLFkF_Z00JiIF3Z4SHPTqCB15aEvVyylQG_qy3LBJ3YBoC4SKNv21tL9hp2UJ",
      createOrder: (data: any) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: this.totalPrice,
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: this.totalPrice
                  }
                }
              },
              items: [
                {
                  name: "STUDYBUDDIES",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: this.totalPrice
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });

      },
      onClientAuthorization: (data: any) => {

        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
        this.paid = true;
        this.id_user_app = this.auth.getId();
        let id=this.id_user_app
        let room = window.sessionStorage.getItem('room');
        if (room) {
          let roomJSON = JSON.parse(room);
          this.guid = roomJSON.guid;
          this.totalPrice = roomJSON.price_per_hour;
          if(!this.desc){
          this.paypalService.updateRoomPayment(this.guid, this.id_user_app, false).subscribe(
            res => {
              Swal.fire('Éxito', 'El pago se ha realizado correctamente. Puede acceder a la sala desde "Mis tutorias pagadas".', 'success').then(function () {
                window.location.href = `student/Tmine/${id}`;
              })
              console.log("PAGO realizado con éxito.");
              this.user.puntos += 1;
              this.tokenStorageService.saveUser(this.user);
            },
            err => console.log(err)
          )
        }else {
          this.paypalService.updateRoomPayment(this.guid, this.id_user_app, true).subscribe(
            res => {
              Swal.fire('Éxito', 'El pago se ha realizado correctamente. Puede acceder a la sala desde "Mis tutorias pagadas".', 'success').then(function () {
                window.location.href = `student/Tmine/${id}`;
              })
              console.log("PAGO realizado con éxito.");
                this.user.puntos -= 15;
              this.tokenStorageService.saveUser(this.user);
            },
            err => console.log(err)
          )}
        }
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      },
    };

  }
}
