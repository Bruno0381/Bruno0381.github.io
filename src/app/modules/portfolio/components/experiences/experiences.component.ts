import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {
      summary: {
        strong: 'Field Technical | DXC Technology',
        p: 'DXC | Jul 2021 - Present',
      },
      text: '<p>Analista de Suporte Especialista em ambiente critico Tesouraria do Banco Itaú. Problemas de Hardware, softwares e aplicações do Itaú, suporte a aplicativos do pacote Office 365, problemas com VPN ( Cisco AnyConnect ), consultas em AD Active Directory, grupos de acessos e domínios, suporte a Excel com utilização de Addins e macros em VBA.',
    },
    {
      summary: {
        strong: 'Suporte Especialista',
        p: 'Tivit | Ago 2018 - Jul 2021',
      },
      text: '<p>Troubleshooting em Softwares banco Itaú, Análise em equipamentos Mobile, Desktops, Notebooks, Workstations em Windows 10 e 11, suporte a aplicativos de Office 2010 a 365, VPN, correção de problemas via registro Windows, configuração de e-mail, caixa genérica e lista de distribuição do Outlook, problemas relacionados a redes.',
    },
    {
      summary: {
        strong: 'Auxiliar de Programação',
        p: 'Grupo Recursos Tecnologia e Integração Digital | Ago 2015 - Dez 2017',
      },
      text: '<p>Suporte a sistemas da Transalvador, levamento de requisitos, testes de softwares, implantação de sistemas no Nucleo de Operação Assistisda NOA, apresentação de aplicativo de autuação de multas mobile da Transalvador.',
    },
  ]);

}
