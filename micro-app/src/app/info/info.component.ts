import { Component, OnInit } from '@angular/core';

type Course = {
  name: string;
  startDate: number;
  endDate: number;
  link?: string;
};

type Courses = Array<Course>;

type skill = {
  name: string;
  description: string;
};

type skills = Array<skill>;

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
      name: 'The Rolling Scopes: React Course.',
      startDate: 2021.02,
      endDate: 2021.04,
      link:
        'https://rrroman.github.io/certificates/images/certificate-rs-react-2021.png',
    },
  ];

  skills: skills = [
    {
      name: 'React',
      description:
        ' - an open-source, front end, JavaScript library for building user interfaces or UI components.',
    },
    {
      name: 'Angular',
      description:
        ' - a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
    },
    {
      name: 'TypeScript',
      description:
        ' - an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.',
    },
    {
      name: 'JavaScript',
      description:
        ' - a lightweight, interpreted, or just-in-time compiled programming language, prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
    },
    {
      name: 'CSS',
      description:
        ' - a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    },
    {
      name: 'HTML',
      description:
        ' - the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      name: 'GIT',
      description:
        ' - a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
