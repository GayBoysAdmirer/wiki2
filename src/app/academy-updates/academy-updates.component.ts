import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy-updates',
  templateUrl: './academy-updates.component.html',
  styleUrls: ['./academy-updates.component.css']
})
export class AcademyUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "30/06/2023",
        items: [
            {
                name: "Dragon of Void",
                img: "../assets/img/titles/dragon_of_void.png"
            },
            {
                name: "Robber Mask",
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
                name: "Lava Ghost Helmet" ,
                img: "../assets/img/helmets-masks/lava_helmet.png"
            },
           

        ]
    }
]

  randomBox = [
    {
      date: "30/06/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Alzanor Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Asgobas Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Valehir Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        }


      ],
      items: [
          {name: "x999 Angel's Feather"},
          {name: "x999 Fullmoon Crystal"},
          {name: "x1 Rare Spiky Hairstyle"},
          {name: "x15 Rarify Item"},
          {name: "x2 Dye Bomb"},
          {name: "x15 Upgrade Item"},
          {name: "x1 Onyx Wings"},
          {name: "x1 Zephyr Wings"},
          {name: "x2 Reset Perfection"},
          {name: "x1 Magic Bone Drake Chest"},
          {name: "x1 Inventory Expansion Ticket (Permanent)"},
          {name: "x1 Super Fortune Bushtail"},
          {name: "x1 One-Winged Perti Specialist Partner Card"},
          {name: "x5 Gold Potion"},
          {name: "x500 Giant Lump of Gold"}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}