import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Observable, of, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { StorageService } from "src/services/storage.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        public storage: StorageService, 
        private router: Router,
        public alertController: AlertController){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request = this.addToken(request);
        return next.handle(request)
            // add error handling
            .pipe(
                catchError(
                    (error: HttpErrorResponse) => {
                        switch(error.status){
                            case 401:
                                this.handle401();
                                break;
                            
                                // case 403: 
                                // this.handle403();
                                // break;
                        }
                        throw error;
                    }
                ),
            );
    }


    handle403(){
        this.storage.setLocalUser(null);
        this.router.navigate(['home']);
    }

    handle401(){
        this.presentAlert();
    }

    async presentAlert() {
        const alert = await this.alertController.create({
          cssClass: 'basic-alert',
          header: 'Erro de validação',
          message: 'Email ou senha incorreto',
          buttons: ['OK']
        });
    
        await alert.present();
      }

}



export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
}