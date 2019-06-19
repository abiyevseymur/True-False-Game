import React from 'react'
import css from '../QuestionPage.module.css'
import Swipe from 'react-easy-swipe';

const SwipeItem = (props) => {
  function onSwipeStart(event) {
    console.log('Start swiping...');
  }

  function onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`);
    // console.log(`Moved ${position.y} pixels vertically`);
    props.swiped(position.x)
  }

  function onSwipeEnd(event) {
    console.log(props.pixel, 'End swiping...');
    if (props.pixel > 100) {
      props.swiped(150)
    }
    else if(props.pixel< -100){
      props.swiped(-150)
    }
    else{
      props.swiped(0)
    }
  }




  return (
    <Swipe
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}>
      <div className={css.swipeItem}></div>
    </Swipe>
  );


}
export default SwipeItem
