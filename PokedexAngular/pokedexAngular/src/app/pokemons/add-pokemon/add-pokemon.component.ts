import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  profileForm = new FormGroup({
    pokemonName: new FormControl(''),
    pokemonDescription: new FormControl('')
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get types() {
    return this.profileForm.get('types') as FormArray;
  }

  addType() {
    return this.types.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value)
  }
}
