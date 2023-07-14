export class ClampedNumber {
    protected value: number = 0;
    private max: number;
    private min: number;

    constructor (min: number, max: number) {
        this.max = max;
        this.min = min;
    }

    setValue (value: number): ClampedNumber {
        if (this.min <= value && value <= this.max ) {
            this.value = value;
        } else {
            console.error('illegal value in clamped range');
        }

        return this;
    }

    getValue () { return this.value; }
}