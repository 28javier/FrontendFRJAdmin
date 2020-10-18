import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      tituloG: 'Usuarios del Sistema',
      titulo: 'Usuarios',
      icon: 'mdi mdi-account-multiple',
      submenu: [
        {titulo: 'Usuarios', url: 'usuario'}
      ]
    },
    {
      tituloG: 'Categorias del Sistema',
      titulo: 'Categoria',
      icon: 'mdi mdi-folder',
      submenu: [
        {titulo: 'Categoria', url: 'categoria'}
      ]
    },
    {
      tituloG: 'Producto del Sistema',
      titulo: 'Producto',
      icon: 'mdi mdi-clipboard-text',
      submenu: [
        {titulo: 'Producto', url: 'producto'}
      ]
    },
    {
      tituloG: 'Paciente del Sistema',
      titulo: 'Paciente',
      icon: 'mdi mdi-wheelchair-accessibility',
      submenu: [
        {titulo: 'Paciente', url: 'paciente'}
      ]
    },

  ];

  constructor() { }
}
