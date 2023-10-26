import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';
import {Observable, debounceTime, map, takeUntil} from 'rxjs';
import {IProductsFilterForm} from './products-filter-form.interface';
import {IProductsFilter} from './products-filter.interface';
import {DestroyService} from '../../../shared/destroy/destroy.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class FilterComponent implements OnChanges, OnInit {
    @Input() brands: string[] | null = null;
    @Input() initialFilter!: IProductsFilter;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();
    // Output by stream
    // @Output() readonly changeFilter: Observable<IProductsFilter>;

    readonly filterForm = this.formBuilder.group({
        name: '',
        priceRange: this.formBuilder.group({
            min: 0,
            max: 999999,
        }),
        brands: this.formBuilder.array<FormControl<boolean>>([]),
    });

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly destroy$: DestroyService,
    ) {
        // Необходимо делать это в конструкторе, т.к. при создании потока нужна уже созданная форма (filterForm)
        // this.changeFilter = this.getFilterStream$();
    }

    ngOnInit() {
        this.listenFormChange();
        this.updateInitialFormValue();
    }

    ngOnChanges({brands}: SimpleChanges) {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    private updateInitialFormValue() {
        const {name, priceRange} = this.initialFilter;

        this.filterForm.patchValue({name, priceRange});
    }

    private updateBrandsControl() {
        const brandsControls = this.brands
            ? this.brands.map(() => new FormControl(false) as FormControl<boolean>)
            : ([] as Array<FormControl<boolean>>);

        const brandsForm = new FormArray<FormControl<boolean>>(brandsControls);

        this.filterForm.setControl('brands', brandsForm);
    }

    private listenFormChange() {
        const changeFormValue$ = this.filterForm.valueChanges as Observable<IProductsFilterForm>;

        changeFormValue$
            .pipe(
                debounceTime(300),
                map(formValue => ({
                    ...formValue,
                    brands: this.getSelectedBrands(formValue.brands),
                })),
                takeUntil(this.destroy$),
            )
            .subscribe(filter => {
                this.changeFilter.emit(filter);
            });
    }

    private getSelectedBrands(brandSelection: boolean[]): IProductsFilter['brands'] {
        return this.brands ? this.brands.filter((_brand, index) => brandSelection[index]) : [];
    }

    // Output by stream
    // private getFilterStream$(): Observable<IProductsFilter> {
    //     return this.filterForm.valueChanges.pipe(
    //         map(
    //             ({brands, name, ...otherValues}) =>
    //                 ({
    //                     ...otherValues,
    //                     name,
    //                     brands: this.getBrandsListFromArray(brands as boolean[]),
    //                 } as IProductsFilter),
    //         ),
    //     );
    // }
}

// Template driven Forms

// @Component({
//     selector: 'app-filter',
//     templateUrl: './filter.template-driven.component.html',
//     styleUrls: ['./filter.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class FilterComponent {
//     @Input() brands: string[] | null = null;

//     @Output() changeFilter = new EventEmitter<IProductsFilter>();

//     readonly templateFormValue = {
//         name: '123',
//         priceRange: {
//             min: 10,
//             max: 200,
//         },
//         brands: {} as Record<string, boolean>,
//     };

//     logValue(value: unknown) {
//         // console.log(this.templateFormValue);
//         const {brands, ...otherValue} = value as {brands: boolean[]};

//         // eslint-disable-next-line no-console
//         console.log({
//             ...otherValue,
//             brands: Object.entries(brands)
//                 .filter(([_name, isActive]) => isActive)
//                 .map(([name]) => name),
//         });
//         // eslint-disable-next-line no-console
//         console.log('Initial value', this.templateFormValue);
//     }
// }
