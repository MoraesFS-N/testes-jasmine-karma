import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActionDirective } from "./action.directive";
import { ActionModule } from "./action.module";

describe(ActionDirective.name, () => {


  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDirectiveTestComponent ],
      imports: [ ActionModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;

  });

  it(`(D) (@Output appAction) should emit event with payload when Enter key is pressed`, () => {

    const div: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'Enter' } )
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {

    const div: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new Event('click');
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });
});



@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})

class ActionDirectiveTestComponent {

  public event: Event = null;

  public actionHandler(event: Event): void {
      this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
