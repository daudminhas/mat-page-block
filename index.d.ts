import {ChangeDetectorRef, Component, Injectable, NgModule, OnInit} from '@angular/core';

export interface PageBlockOptions {
  text?: string;
  timeout?: number;
  fillColor?: string;
  fillOpacity?: number;
  color?: 'primary' | 'warn' | 'accent';
}

@Injectable()
export declare class PageBlockService {
  blockPage(options?: PageBlockOptions): boolean;
  unblockPage(): boolean;
}

@NgModule({
  exports: [PageBlockComponent]
})
export declare class PageBlockModule {
}

@Component({
  selector: 'mat-page-block'
})
export declare class PageBlockComponent implements OnInit {
  constructor(cdRef: ChangeDetectorRef, pageBlockService: PageBlockService);
  ngOnInit(): void;
}
