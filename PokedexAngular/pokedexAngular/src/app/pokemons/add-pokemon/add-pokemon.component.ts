import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  submitted = false;
  pokemonForm: FormGroup = new FormGroup({
    pokemonName: new FormControl('',Validators.required),
    pokemonDescription: new FormControl('',[Validators.required,Validators.minLength(20)]),
    pokemonWeight: new FormControl('',Validators.required),
    pokemonHeight: new FormControl('',Validators.required),
    pokemonType: new FormControl('',Validators.required),
    gameVersion: new FormControl('',Validators.required)
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    if(this.pokemonForm.valid) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your pokémon has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(this.pokemonForm.value);
    };
  }
}
