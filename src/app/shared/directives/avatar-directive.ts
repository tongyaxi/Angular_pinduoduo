import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective {
  @Input()
  @HostBinding('style.width')
  @HostBinding('style.height')
  avatarSize = '1.5rem';

  @Input() @HostBinding('style.border-radius')
  avatarRadius = '50%';

  @Input() @HostBinding('style.object-fit')
  avatarFitMode = 'cover';
}