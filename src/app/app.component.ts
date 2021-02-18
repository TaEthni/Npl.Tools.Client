import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(updates: SwUpdate) {
        if (updates.isEnabled) {

            updates.available.subscribe((event) => {
                console.log('current version is', event.current);
                console.log('available version is', event.available);

                if (confirm('New version available. Update now?')) {
                    updates.activateUpdate().then(() => document.location.reload());
                }
            });

            updates.activated.subscribe(event => {
                console.log('old version was', event.previous);
                console.log('new version is', event.current);
            });

            updates.unrecoverable.subscribe(event => {
                alert(
                    `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
                    'Please reload the page.'
                );
            });
        }
    }
}
