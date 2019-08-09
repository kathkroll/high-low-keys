# HighLowKeys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## How to Run the Test Page

Clone this repo.

Then run `npm install`.

Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. You should see a page that looks like this:

![Image of UI](https://github.com/kathkroll/reference.PNG)

## Using the Component

#### Example
```
<app-high-low-keys 
  [optsComplete]="highLowSoundKeys"
  (fetchResultsWithFilter)="fetchSounds($event)"
  (keysSelected)="soundSelectionUpdated($event)"
>
</app-high-low-keys>
```

### Where...

`optsComplete` is the complete list of options (pre-filtered by server) for the component to render. `optsComplete` is an array of `IHighLowKeyOption`:

```javascript
interface IHighLowKeyOption {
  value: string;
  subOpts: string[];
}
```

`fetchResultsWithFilter` is the emitted event that passes a string filter that the calling code should use to get the updated `IHighLowKeyOption[]` to pass as `optsComplete`

`keysSelected` is the emitted event that passes back both the high-level key and the low-level key whenever either one of them changes.


