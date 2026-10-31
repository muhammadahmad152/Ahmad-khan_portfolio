import { Component } from '@angular/core';

type ProjectFilter = 'All' | 'Frontend' | 'Game Development' | 'Web Application';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  activeFilter: ProjectFilter = 'All';

  filters: ProjectFilter[] = ['All', 'Frontend', 'Game Development', 'Web Application'];

  projects = [
    {
      title: 'E-Commerce Fashion Store',
      description: 'A modern e-commerce platform for fashion products.',
      category: 'Frontend' as ProjectFilter,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      visual: 'FASHION',
      label: 'E-COMMERCE PLATFORM',
      status: 'Practice project',
      number: '01'
    },
    {
      title: 'Audio Visualizer & Custom Media Player',
      description: 'A focused audio visualization and media player interface built around a straightforward user flow.',
      category: 'Frontend' as ProjectFilter,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      visual: 'FX',
      label: 'AUDIO VISUALIZER',
      status: 'Practice project',
      number: '02'
    },
    {
      title: 'Code Editor & Password Utility',
      description: 'A code editor with integrated password generation capabilities.',
      category: 'Frontend' as ProjectFilter,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      visual: '••••••',
      label: 'CODE EDITOR & PASSWORD UTILITY',
      status: 'Practice project',
      number: '03'
    },
    {
      title: 'Crypto Analytics Dashboard',
      description: 'A crypto analytics dashboard for organizing everyday activities and keeping work visible.',
      category: 'Frontend' as ProjectFilter,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      visual: 'TASKS',
      label: 'CRYPTO ANALYTICS DASHBOARD',
      status: 'Practice project',
      number: '04'
    },
    {
      title: 'Dead City: Survival 2D',
      description: 'A 2D survival game project created as an exploration of interactive gameplay.',
      category: 'Game Development' as ProjectFilter,
      technologies: ['JavaScript'],
      visual: 'SURVIVE',
      label: '2D GAME EXPERIENCE',
      status: 'Completed',
      number: '05'
    },
    {
      title: 'WorldPulse',
      description: 'An environment and climate intelligence project bringing country-level information into one experience.',
      category: 'Web Application' as ProjectFilter,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      visual: 'EARTH',
      label: 'CLIMATE INTELLIGENCE',
      status: 'In development',
      number: '06'
    }
  ];

  get visibleProjects() {
    return this.activeFilter === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filter: ProjectFilter): void {
    this.activeFilter = filter;
  }
}
