import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NativeElementInjectorDirective {
    constructor(control, el) {
        this.control = control;
        this.el = el;
    }
    ngOnInit() {
        if (this.control.control) {
            this.control.control['nativeElement'] = this.el.nativeElement;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NativeElementInjectorDirective, deps: [{ token: i1.NgControl }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NativeElementInjectorDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ngModel], [formControl], [formControlName]',
                }]
        }], ctorParameters: () => [{ type: i1.NgControl }, { type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbC1pbnB1dC1icy9zcmMvbGliL2NvcmUvZGlyZWN0aXZlL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUFNLGVBQWUsQ0FBQzs7O0FBUTlELE1BQU0sT0FBTyw4QkFBOEI7SUFDMUMsWUFDUyxPQUFrQixFQUNsQixFQUErQjtRQUQvQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLE9BQUUsR0FBRixFQUFFLENBQTZCO0lBQ3JDLENBQUM7SUFDSixRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUNyRTtJQUNGLENBQUM7OEdBVFcsOEJBQThCO2tHQUE5Qiw4QkFBOEI7OzJGQUE5Qiw4QkFBOEI7a0JBSjFDLFNBQVM7bUJBQUM7b0JBQ1YsK0NBQStDO29CQUMvQyxRQUFRLEVBQUUsNkNBQTZDO2lCQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG5cdHNlbGVjdG9yOiAnW25nTW9kZWxdLCBbZm9ybUNvbnRyb2xdLCBbZm9ybUNvbnRyb2xOYW1lXScsXG59KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29udHJvbDogTmdDb250cm9sLFxuXHRcdHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEZvcm1FbGVtZW50PlxuXHQpIHt9XG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmNvbnRyb2wuY29udHJvbCkge1xuXHRcdFx0KDxhbnk+dGhpcy5jb250cm9sLmNvbnRyb2wpWyduYXRpdmVFbGVtZW50J10gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0fVxuXHR9XG59Il19