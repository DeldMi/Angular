
import { Component } from '@angular/core';
import { Subscription, interval, of } from 'rxjs';


@Component({
    selector: 'app-rxjs',
    templateUrl: "rxjs-page.component.html"
})

export class RXJSPageComponent implements OnInit {

    items = [];

    subscription!: Subscription;

    // observable = of('itms 1');
    observable = interval(1000);

    constructor(){};

    
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    nrOnInit(){
        this.subscription = this.observable.subscribe((item)=>{
            this.items.push(item);
        })
    };

    desinscrever(){
        this.subscription.unsubscribe();
    }

}