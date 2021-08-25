import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [{ path: '', redirectTo: 'all', pathMatch: 'full' }];

export const routing = RouterModule.forRoot(appRoutes);
