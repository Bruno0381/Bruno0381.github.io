import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '51px',
      description: '<p>Lista de tarefas desenvolvido em Angular para ajudar no seu dia a dia!</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '51px',
      description: '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao Angular</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '51px',
      description: '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao Angular</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
