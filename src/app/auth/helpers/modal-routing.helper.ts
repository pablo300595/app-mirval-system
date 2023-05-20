import { Router } from "@angular/router";

export function redirectPageByTime(time: number, route: any, router: Router) {
    setTimeout(() => {
        router.navigateByUrl(route);
    }, time);
}