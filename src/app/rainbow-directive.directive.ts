import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowDirective]'
})
export class RainbowDirectiveDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostBinding('style.border') border: string;
  @HostListener('mouseover') onMouseOver() {
    this.border = '5px solid green';
  }


  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }
}
