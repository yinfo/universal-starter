import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    users = [
        {
            name: 'Lia Lugo',
            avatar: 'svg-11',
            details: 'I love cheese, ...',
            isAdmin: true,
            isCool: false
        },
        {
            name: 'George Duke',
            avatar: 'svg-12',
            details: 'Zombie ipsum ...',
            isAdmin: false,
            isCool: true
        }
        // ...
    ];
}
