import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private snackBar: MatSnackBar) {}
  handleError(error: any) {
    console.error(error);
    // send to the observable
    const loggerService = this.injector.get(LoggerService);
    loggerService.log(error).subscribe();

    // next show a friendly message
    this.snackBar.open(error, 'Dismiss', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 4000,
    });
  }
}
