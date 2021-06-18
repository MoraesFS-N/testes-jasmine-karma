import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach( async () => {
    await TestBed.configureTestingModule({

      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  // #Test 1
  it('Should create component', () => {

    expect(component).toBeTruthy();
  });

  // #Test 2
  it('Should auto-generate ID during NgOnInit when (@Input id) is not assigned', () => {

    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  // #Test 3
  it ('Should NOT auto-generate ID during NgOnInit when (@Input id) is assigned', () => {

    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();

    expect(component.id).toBe(someId);
  });

  // #Test 4
  it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {

    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });


})
