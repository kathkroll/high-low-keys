# HighLowKeys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


