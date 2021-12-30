import {
  Input,
  OnInit,
  Component,
  AfterContentChecked,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Pagination, Virtual } from 'swiper';

SwiperCore.use([Pagination, Virtual]);

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit, AfterContentChecked {
  @Input()
  name: string;

  @Input()
  description: string;

  wineForm: FormGroup;
  isSubmitted = false;
  isRecommandationListItemOpened: boolean = false;
  isDescriptionListItemOpened: boolean = false;
  isWineToAssociateListItemOpened: boolean = false;
  // winesRecommandation$: Observable<any[]>;
  winesRecommandation: any[] = [];
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  // config: SwiperOptions = {
  //   slidesPerView: 2,
  //   spaceBetween: 50,
  //   pagination: true,
  // };
  touchAllowed: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private spoonacularService: SpoonacularApiService
  ) {}

  ngOnInit() {
    this.wineForm = this.formBuilder.group({
      wine: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      minRating: ['', [Validators.required, Validators.pattern(/[0-9]{0,1}/)]],
      maxPrice: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  swiperSlideChanged(e) {
    console.log('changed ', e);
  }
  next() {
    this.swiper.swiperRef.slideNext(500);
  }
  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }
  ToggleTouch() {
    this.touchAllowed = this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
  }

  wineRecommandationToggleAccordion(): void {
    this.isRecommandationListItemOpened = !this.isRecommandationListItemOpened;
  }
  wineDescriptionToggleAccordion(): void {
    this.isDescriptionListItemOpened = !this.isDescriptionListItemOpened;
  }
  winesToAssociateToggleAccordion(): void {
    this.isWineToAssociateListItemOpened =
      !this.isWineToAssociateListItemOpened;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.wineForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const wine = this.wineForm.get('wine').value;
      const quantity = this.wineForm.get('quantity').value;
      const maxPrice = this.wineForm.get('maxPrice').value;
      const minRating = this.wineForm.get('minRating').value;

      this.spoonacularService
        .getWineRecommandation(wine, quantity, maxPrice, minRating)
        .subscribe((data) => {
          this.winesRecommandation = data;
          console.log(this.winesRecommandation);
        });
    }
  }
}
