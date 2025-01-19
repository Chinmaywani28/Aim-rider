declare let $: any;
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ToggleService } from '../app/common/sidebar/toggle.service';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CustomizerSettingsComponent } from './customizer-settings/customizer-settings.component';
import { RouterOutlet, Router, NavigationCancel, NavigationEnd, RouterLink } from '@angular/router';
import { CustomizerSettingsService } from './customizer-settings/customizer-settings.service';
import { KanbanBoardComponent } from "./apps/kanban-board/kanban-board.component";
import { ProjectManagementComponent } from './dashboard/project-management/project-management.component';
import { ProjectManagementPageComponent } from "./pages/project-management-page/project-management-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { ComingSoonPageComponent } from "./pages/coming-soon-page/coming-soon-page.component";
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, FooterComponent, RouterLink, CustomizerSettingsComponent, KanbanBoardComponent, ProjectManagementComponent, ProjectManagementPageComponent, HomeComponent, ComingSoonPageComponent,MatFormFieldModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {

    // title = 'Daxa - Angular 17 Material Design Admin Dashboard Template';
    // routerSubscription: any;
    // location: any;

    // // isSidebarToggled
    // isSidebarToggled = false;

    // // isToggled
    // isToggled = false;

    // constructor(
    //     public router: Router,
    //     private toggleService: ToggleService,
    //     public themeService: CustomizerSettingsService
    // ) {
    //     this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
    //         this.isSidebarToggled = isSidebarToggled;
    //     });
    //     this.themeService.isToggled$.subscribe(isToggled => {
    //         this.isToggled = isToggled;
    //     });
    // }

    // // ngOnInit
    // ngOnInit(){
    //     this.recallJsFuntions();
    // }

    // // recallJsFuntions
    // recallJsFuntions() {
    //     this.routerSubscription = this.router.events
    //     .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    //     .subscribe(event => {
    //         this.location = this.router.url;
    //         if (!(event instanceof NavigationEnd)) {
    //             return;
    //         }
    //         window.scrollTo(0, 0);
    //     });
    // }

    // // Dark Mode
    // toggleTheme() {
    //     this.themeService.toggleTheme();
    // }

    // // Sidebar Dark
    // toggleSidebarTheme() {
    //     this.themeService.toggleSidebarTheme();
    // }

    // // Right Sidebar
    // toggleRightSidebarTheme() {
    //     this.themeService.toggleRightSidebarTheme();
    // }

    // // Hide Sidebar
    // toggleHideSidebarTheme() {
    //     this.themeService.toggleHideSidebarTheme();
    // }

    // // Header Dark Mode
    // toggleHeaderTheme() {
    //     this.themeService.toggleHeaderTheme();
    // }

    // // Card Border
    // toggleCardBorderTheme() {
    //     this.themeService.toggleCardBorderTheme();
    // }

    // // Card Border Radius
    // toggleCardBorderRadiusTheme() {
    //     this.themeService.toggleCardBorderRadiusTheme();
    // }

    // // RTL Mode
    // toggleRTLEnabledTheme() {
    //     this.themeService.toggleRTLEnabledTheme();
    // }

    // coming soon page component code
    private countdownInterval: any;
    public countdown: { days: number, hours: number, minutes: number, seconds: number };

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        // Set your target date and time for the countdown
        const targetDate = new Date('2025-12-31T23:59:59').getTime();

        // Update the countdown every second
        this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        } else {
            // Countdown has ended, do something here
            this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            clearInterval(this.countdownInterval);
        }
        }, 1000);
    }

    ngOnDestroy(): void {
        // Clear the interval to prevent memory leaks
        clearInterval(this.countdownInterval);
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}