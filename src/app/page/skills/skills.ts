import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillGroups = [
    {
      number: '01',
      name: 'Frontend',
      description: 'Interfaces, browser experiences and responsive layouts.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular']
    },
    {
      number: '02',
      name: 'Backend',
      description: 'Application logic, server-side development and APIs.',
      skills: ['PHP', 'Laravel', 'C#']
    },
    {
      number: '03',
      name: 'Data',
      description: 'Working with relational data and database concepts.',
      skills: ['SQL Server', 'MySQL', 'Joins', 'Stored Procedures']
    },
    {
      number: '04',
      name: 'Tools & Workflow',
      description: 'The everyday tools behind my development workflow.',
      skills: ['VS Code', 'Visual Studio', 'Git', 'GitHub', 'Chrome DevTools']
    }
  ];

  focusAreas = ['Artificial Intelligence', 'Cybersecurity', 'Software Engineering'];
}
