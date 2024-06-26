import { Component, OnInit } from '@angular/core';

import wingsData from "../_json/costumes/mini-pets.json";

interface Wings {
  name: string;
  location?: string; // Pole location jest opcjonalne
  buff?: string;     // Pole buff jest opcjonalne
}



function filter() {
  const filter = <HTMLSelectElement>document.getElementById('weapon-filter');
  filter.addEventListener('change', () => {
      let filterValue = filter.options[filter.selectedIndex].text;
      let raidItems = document.querySelectorAll('.raid');
      let pvpItems = document.querySelectorAll('.pvp');
      let fishItems = document.querySelectorAll('.fish');
      let goldItems = document.querySelectorAll('.gold');
      let bettingItems = document.querySelectorAll('.betting');
      let perfingItems = document.querySelectorAll('.perfing');
      let swapperItems = document.querySelectorAll('.swapper');

      switch(filterValue) {
          case "All":
              raidItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.remove('display-none');
            
              });
              goldItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              break;
          case "PVP":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.remove('display-none');
             
              });
              goldItems.forEach(element => {
                  element.classList.add('display-none');
             
              });
              break;
          case "Raid/PVE":
              raidItems.forEach(element => {
                  element.classList.remove('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
              
              });
              goldItems.forEach(element => {
                  if(element.classList.contains('raid')) {
                      element.classList.remove('display-none');
                  } else {
                      element.classList.add('display-none');
                  }
            
              });
              break;
          
          case "Gold":
              raidItems.forEach(element => {
                  element.classList.add('display-none');
              });
              pvpItems.forEach(element => {
                  element.classList.add('display-none');
             
              });
              goldItems.forEach(element => {
                  element.classList.remove('display-none');
              });
          
              break;

              case "Swapper":
                swapperItems.forEach(element => {
                    element.classList.add('display-none');
                });
            
                break;

              
      }
  });
}


function showBuffs() {
  $(document).ready(function() {
    $('.show-buffs').click(function(event){
      let btn = event.target;
      let nextChild = btn.nextElementSibling;

      if(nextChild?.classList.contains('display-none')) {
        nextChild.classList.remove('display-none');
        nextChild.classList.add('display-flex');
      } else if(nextChild?.classList.contains('display-flex')) {
        nextChild.classList.remove('display-flex');
        nextChild.classList.add('display-none');
      }
      $('.close-buffs').click(function(event) {
        nextChild?.classList.remove('display-flex');
        nextChild?.classList.add('display-none');
      });
      
      window.addEventListener('click', (e) => {
        if(e.target == nextChild) {
          nextChild?.classList.remove('display-flex');
          nextChild?.classList.add('display-none');
        }
      });
    });
  });
}

@Component({
  selector: 'app-mini-ets',
  templateUrl: './mini-pets.component.html',
  styleUrls: ['./mini-pets.component.css']
})
export class MiniPetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    showBuffs();
     filter();
  }
  

  wings: Wings[] = wingsData;

  openModal(wing: any) {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
    const img = document.getElementById('img01') as HTMLImageElement;
    if (img) {
      img.src = `../assets/img/costumes/mini-pets/${wing.buff}.png`;
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
