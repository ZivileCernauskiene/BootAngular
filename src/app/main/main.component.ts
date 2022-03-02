import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  public isCollapsed = true;

  public isCarousel = true

  images=["../../assets//img/1.jpg", "../../assets//img/2.jpg","../../assets//img/3.jpg"]
  imgText=["This is the first picture and it shows stuff", "This is the second picture and it shows stuff", "This is the third picture and it shows stuff"]
  slideIndex=1


  showing=true

  show(){

    if(!this.showing ){
      return
    }
    if(this.slideIndex>this.images.length-1){
      this.slideIndex=0
    }
    console.log('veikia show')
   this.slideIndex++
    let that=this

    setTimeout(function()  {
     that.show()
      }, 2000);
  }

  stopShow(){
    this.showing=false
  }

  startShow(){
    if(!this.showing){
      this.showing=true
      this.show()
    }
    else {
      this.showing=false
    }
  }


// BOOTSTRAP CONTROLS

  // BOOTSTRAP CONTROLS


  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

paused = false;
unpauseOnArrow = false;
pauseOnIndicator = false;
pauseOnHover = true;
pauseOnFocus = true;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (this.unpauseOnArrow && slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}

}

