
import { Component } from '@angular/core';
import { Subscription, filter, interval, map, of, range } from 'rxjs';


@Component({
    selector: 'app-rxjs',
    templateUrl: "rxjs-page.component.html"
})
export class RXJSPageComponent implements OnInit {

    items = [];

    subscription!: Subscription;

    // observable = of('itms 1');
    observable = interval(1000);
    observable2 = range(1,10);

    constructor(){};

    
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    nrOnInit(){
        // this.subscription = this.observable
        // .pipe(
        //     map( x => x * 2),
        //     tap( x => console.log(x)),
        //     filter(x=> x < 10)
        // )
        // .subscribe((item)=>{
        //     this.items.push(item);
        // })


        this.observable2.subscribe(item=>{
            this.items.push(item);
        });
    };

    desinscrever(){
        this.subscription.unsubscribe();
    }

}