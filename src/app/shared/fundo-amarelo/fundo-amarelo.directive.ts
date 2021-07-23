import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) {
      // Por questões de segurança, não é recomendavel acessar o element ref diretamente.
      // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

      // Sendo assim, a melhor pratica é usando o Renderer2 passando a propriedade NativeElement
      // do ElementRef e os valores do style.
      this._renderer.setStyle(
        this._elementRef.nativeElement,
        'backgroundColor',
        'yellow');
   }

}
