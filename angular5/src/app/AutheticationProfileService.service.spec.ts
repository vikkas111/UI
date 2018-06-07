/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutheticationProfileServiceService } from './AutheticationProfileService.service';

describe('Service: AutheticationProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutheticationProfileServiceService]
    });
  });

  it('should ...', inject([AutheticationProfileServiceService], (service: AutheticationProfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
