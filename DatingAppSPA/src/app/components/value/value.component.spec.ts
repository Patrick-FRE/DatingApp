import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { ValueComponent } from './value.component';
import { HttpClient } from '@angular/common/http';
import { of, from } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

const HttpClientStub = {
  get: () =>
    from([1, 2, 3, 4]).pipe(
      concatMap(item => of(item).pipe(delay(item * 1000)))
    )
};

xdescribe('ValueComponent', () => {
  let component: ValueComponent;
  let fixture: ComponentFixture<ValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValueComponent],
      providers: [{ provide: HttpClient, useValue: HttpClientStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should give an error if the respone delay more than 3000ms', fakeAsync(() => {
    component.getVaues().subscribe(
      res => {
        console.log(res);
        expect(res).toBeLessThan(3);
      },
      error => {
        expect(error).toBeTruthy();
        console.log(error);
      }
    );
    tick(6000);
  }));
});
