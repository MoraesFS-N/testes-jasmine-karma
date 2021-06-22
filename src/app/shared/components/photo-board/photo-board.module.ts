import { CommonModule } from "@angular/common";
import { Input } from "@angular/core";
import { NgModule } from "@angular/core";
import { PhotoFrameModule } from "../photo-frame/photo-frame.module";
import { PhotoBoardComponent } from "./photo-board.component";

@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoardComponent]
})

export class PhotoBoardModule{

  @Input() public photos: any[];
}
