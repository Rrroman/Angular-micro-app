import { Component, OnInit } from '@angular/core';

type Course = {
  name: string;
  startDate: number;
  endDate: number;
  link?: string;
};

type Courses = Array<Course>;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  rs: Courses = [
    {
      name: 'The Rolling Scopes: JS Front End Course.',
      startDate: 2020.09,
      endDate: 2021.02,
      link:
        'https://rrroman.github.io/certificates/images/certificate-rs-front-end-2020-2021.png',
    },
    {
      name: 'React Course. Link incoming.',
      startDate: 2021.02,
      endDate: 2021.04,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
