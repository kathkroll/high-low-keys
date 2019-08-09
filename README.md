# HighLowKeys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Using the Component

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



