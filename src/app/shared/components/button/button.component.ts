import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
    @Input() btnType = 'primary';
    @Input() btnSize = 'medium';
    @Input() btnInverse = false;
    @Input() btnDisabled = false;
    @Input() btnFullWidth: string;
    @Input() btnIcon: any;
    @Input() btnIconClass: string;
    @Input() btnIconPos: string;
    @Input() btnHideTxtOnMobile: boolean;
    @Input() btnLoading = false;

    @Output() btnClickEvent = new EventEmitter<any>();

    btnTypeClass: string;
    btnSizeClass: string;
    btnFullWidthClass: string;
    iconPosition: string;
    isIconBtn: boolean;

    spinnerIcon = faSyncAlt;

    icon = this.btnLoading ? faSyncAlt : this.btnIcon;

    constructor() {}

    ngOnInit() {
        this.btnTypeClass = this.setBtnTypeClass(this.btnType);
        this.btnSizeClass = this.setBtnSizeClass(this.btnSize);

        if (this.btnIconClass || this.btnIcon) {
            this.isIconBtn = true;
            this.iconPosition = this.setIconPosition(this.btnIconPos);
        }

        if (this.btnFullWidth) {
            this.btnFullWidthClass = this.setBtnFullWidth(this.btnFullWidth);
        }
    }

    setBtnTypeClass(type) {
        switch (type) {
            case 'secondary':
                return 'g-button--secondary';
            case 'unstyled':
                return 'g-button--unstyled';
            default:
                return 'g-button--primary';
        }
    }

    setBtnSizeClass(size) {
        switch (size) {
            case 'small':
                return 'g-button--sm';
            case 'large':
                return 'g-button--lg';
            default:
                return 'g-button--md';
        }
    }

    setIconPosition(position) {
        switch (position) {
            case 'right':
                return 'right';
            default:
                return 'left';
        }
    }

    setBtnFullWidth(value) {
        switch (value) {
            case 'mobile-only':
                return 'g-button--full-width-mobile';
            default:
                return 'g-button--full-width';
        }
    }

    onClick() {
        this.btnClickEvent.emit();
    }
}
