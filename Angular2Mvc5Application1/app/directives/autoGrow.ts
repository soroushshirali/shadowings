import { Directive,ElementRef,Renderer } from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)':'onfocus()',
        '(blur)':'onblur()'      
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {

    }
    onfocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '220px');
    }
    onblur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }
}

