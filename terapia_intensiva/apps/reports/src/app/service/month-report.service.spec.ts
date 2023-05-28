import { TestBed } from '@angular/core/testing';

import { MonthReportService } from './month-report.service';

describe('MonthReportService', () => {
  let service: MonthReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
