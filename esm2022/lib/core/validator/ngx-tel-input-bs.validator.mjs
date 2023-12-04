import * as lpn from 'google-libphonenumber';
export const phoneNumberValidator = (control) => {
    if (!control.value) {
        return;
    }
    // Find <input> inside injected nativeElement and get its "id".
    const el = control.nativeElement;
    var temp = el.querySelector('input[type="tel"]') ? el.querySelector('input[type="tel"]') : null;
    const inputBox = temp;
    if (inputBox) {
        const id = inputBox.id;
        const isCheckValidation = inputBox.getAttribute('validation');
        if (isCheckValidation === 'true') {
            const isRequired = control.errors && control.errors.required === true;
            const error = { validatePhoneNumber: { valid: false } };
            inputBox.setCustomValidity('Invalid field.');
            let number = null;
            try {
                number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            }
            catch (e) {
                if (isRequired === true) {
                    return error;
                }
                else {
                    inputBox.setCustomValidity('');
                }
            }
            if (control.value) {
                if (!number) {
                    return error;
                }
                else {
                    if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
            }
        }
        else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
        }
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRlbC1pbnB1dC1icy52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVsLWlucHV0LWJzL3NyYy9saWIvY29yZS92YWxpZGF0b3Ivbmd4LXRlbC1pbnB1dC1icy52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUU3QyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE9BQVksRUFBRSxFQUFFO0lBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ25CLE9BQU87S0FDUDtJQUNELCtEQUErRDtJQUMvRCxNQUFNLEVBQUUsR0FBZ0IsT0FBTyxDQUFDLGFBQTRCLENBQUM7SUFDN0QsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUVsRyxNQUFNLFFBQVEsR0FBcUIsSUFBSyxDQUFBO0lBQ3hDLElBQUksUUFBUSxFQUFFO1FBQ2IsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxpQkFBaUIsS0FBSyxNQUFNLEVBQUU7WUFDakMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUM7WUFDdEUsTUFBTSxLQUFLLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBRXhELFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTdDLElBQUksTUFBTSxHQUEyQixJQUFJLENBQUM7WUFFMUMsSUFBSTtnQkFDSCxNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsQ0FBQzthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO29CQUN4QixPQUFPLEtBQUssQ0FBQztpQkFDYjtxQkFBTTtvQkFDTixRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Q7WUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBRWxCLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1osT0FBTyxLQUFLLENBQUM7aUJBQ2I7cUJBQU07b0JBQ04sSUFDQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLENBQ3hELE1BQU0sRUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsRUFDQTt3QkFDRCxPQUFPLEtBQUssQ0FBQztxQkFDYjt5QkFBTTt3QkFDTixRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQy9CO2lCQUNEO2FBQ0Q7U0FDRDthQUFNLElBQUksaUJBQWlCLEtBQUssT0FBTyxFQUFFO1lBQ3pDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvQixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7S0FDRDtJQUNELE9BQU87QUFDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBscG4gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyVmFsaWRhdG9yID0gKGNvbnRyb2w6IGFueSkgPT4ge1xuXHRpZiAoIWNvbnRyb2wudmFsdWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gRmluZCA8aW5wdXQ+IGluc2lkZSBpbmplY3RlZCBuYXRpdmVFbGVtZW50IGFuZCBnZXQgaXRzIFwiaWRcIi5cblx0Y29uc3QgZWw6IEhUTUxFbGVtZW50ID0gY29udHJvbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXHR2YXIgdGVtcDogYW55ID0gZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRlbFwiXScpPyBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGVsXCJdJyk6IG51bGxcblx0XG5cdGNvbnN0IGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50ID0gdGVtcCEgXG5cdGlmIChpbnB1dEJveCkge1xuXHRcdGNvbnN0IGlkID0gaW5wdXRCb3guaWQ7XG5cdFx0Y29uc3QgaXNDaGVja1ZhbGlkYXRpb24gPSBpbnB1dEJveC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRpb24nKTtcblx0XHRpZiAoaXNDaGVja1ZhbGlkYXRpb24gPT09ICd0cnVlJykge1xuXHRcdFx0Y29uc3QgaXNSZXF1aXJlZCA9IGNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkID09PSB0cnVlO1xuXHRcdFx0Y29uc3QgZXJyb3IgPSB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcblxuXHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJ0ludmFsaWQgZmllbGQuJyk7XG5cblx0XHRcdGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlciB8IG51bGwgPSBudWxsO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRudW1iZXIgPSBscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG5cdFx0XHRcdFx0Y29udHJvbC52YWx1ZS5udW1iZXIsXG5cdFx0XHRcdFx0Y29udHJvbC52YWx1ZS5jb3VudHJ5Q29kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpZiAoaXNSZXF1aXJlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnB1dEJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb250cm9sLnZhbHVlKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIW51bWJlcikge1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQhbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXG5cdFx0XHRcdFx0XHRcdG51bWJlcixcblx0XHRcdFx0XHRcdFx0Y29udHJvbC52YWx1ZS5jb3VudHJ5Q29kZVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpbnB1dEJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpc0NoZWNrVmFsaWRhdGlvbiA9PT0gJ2ZhbHNlJykge1xuXHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXG5cdFx0XHRjb250cm9sLmNsZWFyVmFsaWRhdG9ycygpO1xuXHRcdH0gXG5cdH1cblx0cmV0dXJuO1xufTtcbiJdfQ==