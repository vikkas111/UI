/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatasharedService } from './datashared.service';

describe('Service: Datashared', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasharedService]
    });
  });

  it('should ...', inject([DatasharedService], (service: DatasharedService) => {
    expect(service).toBeTruthy();
  }));
});
