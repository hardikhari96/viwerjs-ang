import { Directive, ElementRef, OnDestroy, AfterViewInit, Input } from '@angular/core';
import Viewer from 'viewerjs';

@Directive({
    selector: '[viwerjsAngPreview]'
})
export class ViwerjsAngDirective implements AfterViewInit, OnDestroy {

    @Input() viwerjsAng: Viewer.Options = {};
    instance: Viewer | any;

    private nativeElement: HTMLElement;

    constructor(private elementRef: ElementRef) {
        this.nativeElement = this.elementRef.nativeElement;
    }

    public ngAfterViewInit(): void {
        this.initViewer();
    }

    private initViewer(): void {
        if (this.instance) {
            this.instance.destroy();
        }

        this.instance = new Viewer(this.nativeElement, {
            transition: false,
            ...this.viwerjsAng
        });
    }

    public ngOnDestroy(): void {
        if (this.instance) {
            this.instance.destroy();
        }
    }
}
