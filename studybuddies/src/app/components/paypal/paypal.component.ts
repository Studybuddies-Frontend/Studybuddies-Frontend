import { Component, OnInit } from "@angular/core";
import { ICreateOrderRequest } from "ngx-paypal";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-paypal",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.css"]
})
export class PaypalComponent implements OnInit {
  public payPalConfig: any;
  public showPaypalButtons: boolean;
  guid: string;
  totalPrice: string
  paid: boolean
  id_user_app = this.auth.getId();

  constructor(private routes: ActivatedRoute, public auth: AuthService ) {
    this.totalPrice = this.routes.snapshot.params['price']
  }

  ngOnInit() {
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
                  name: "Enterprise Subscription",
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
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      }
    };
  }

  pay() {
    this.showPaypalButtons = true;
  }

  back(){
    this.showPaypalButtons = false;
  }
  
}
