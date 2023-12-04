import * as lpn from 'google-libphonenumber';
import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PhoneNumberFormat } from './core/models/phone-number-format.enum';
import { SearchCountryField } from './core/models/search-country-field.enum';
import { CountryISO } from './core/models/country-iso.enum';
import { Country } from './core/models/country.model';
import { ChangeData } from './core/models/change-data';
import { CountryCode } from './core/data/country-code';
import * as i0 from "@angular/core";
export declare class NgxTelInputBsComponent implements OnInit, OnChanges {
    private countryCodeData;
    phoneValidation: boolean;
    specifiedCountries: Array<string>;
    preferredCountries: Array<string>;
    selectedCountryISO: CountryISO | undefined;
    selectFirstCountry: boolean;
    inputMaxLength: string;
    includeDialCode: boolean;
    enableAutoCountrySelect: boolean;
    enablePlaceholder: boolean;
    searchCountryFlag: boolean;
    searchCountryField: SearchCountryField[];
    searchCountryPlaceholder: string;
    numberFormat: PhoneNumberFormat;
    customPlaceholder: string;
    value: string;
    inputId: string;
    readonly countryChange: EventEmitter<Country>;
    selectedCountry: Country;
    phoneNumber: string;
    allCountries: Array<Country>;
    allCountriesfiltered: Array<Country>;
    preferredCountriesInDropDown: Array<Country>;
    phoneUtil: lpn.PhoneNumberUtil;
    countrySearchText: string;
    disabled: boolean;
    errors: Array<any>;
    countryList: ElementRef | undefined;
    onTouched: () => void;
    propagateChange: (_: ChangeData | null) => void;
    constructor(countryCodeData: CountryCode);
    ngOnInit(): void;
    init(): void;
    /**
     * Get all countries from data/country-code.ts.
     */
    protected fetchCountryData(): void;
    /**
     * Include Preferred countries, before all countries list.
     */
    private updatePreferredCountries;
    /**
     * Updates selectedCountry.
     */
    private updateSelectedCountry;
    /**
     * Search country based on country name, iso2, dialCode or all of them.
     * List will remove all results that not match
     */
    searchCountry(): void;
    /**
     * Set the selected Country.
     */
    setSelectedCountry(country: Country): void;
    onCountrySelect(country: Country, el: any): void;
    onPhoneNumberChange(): void;
    resolvePlaceholder(): string;
    onInputKeyPress(event: KeyboardEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: any): void;
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param countryCode string
     */
    private getParsedNumber;
    /**
     * Cleans dialcode from phone number string.
     * @param phoneNumber string
     */
    private removeDialCode;
    /**
     * Sifts through all countries and returns iso code of the primary country
     * based on the number provided.
     * @param countryCode country code in number format
     * @param number PhoneNumber object
     */
    private getCountryIsoCode;
    /**
     * Gets formatted example phone number from phoneUtil.
     * @param countryCode string
     */
    protected getPhoneNumberPlaceHolder(countryCode: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxTelInputBsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxTelInputBsComponent, "ngx-tel-input-bs", never, { "phoneValidation": { "alias": "phoneValidation"; "required": false; }; "specifiedCountries": { "alias": "specifiedCountries"; "required": false; }; "preferredCountries": { "alias": "preferredCountries"; "required": false; }; "selectedCountryISO": { "alias": "selectedCountryISO"; "required": false; }; "selectFirstCountry": { "alias": "selectFirstCountry"; "required": false; }; "inputMaxLength": { "alias": "inputMaxLength"; "required": false; }; "includeDialCode": { "alias": "includeDialCode"; "required": false; }; "enableAutoCountrySelect": { "alias": "enableAutoCountrySelect"; "required": false; }; "enablePlaceholder": { "alias": "enablePlaceholder"; "required": false; }; "searchCountryFlag": { "alias": "searchCountryFlag"; "required": false; }; "searchCountryField": { "alias": "searchCountryField"; "required": false; }; "searchCountryPlaceholder": { "alias": "searchCountryPlaceholder"; "required": false; }; "numberFormat": { "alias": "numberFormat"; "required": false; }; "customPlaceholder": { "alias": "customPlaceholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; }, { "countryChange": "countryChange"; }, never, never, false, never>;
}
