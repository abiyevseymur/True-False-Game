import React from 'react'
import css from '../QuestionPage.module.css'
import Swipe from 'react-easy-swipe';

const SwipeItem = (props) => {
  function onSwipeStart(event) {
    localStorage.setItem('swipeStart','true')
  }

  function onSwipeMove(position, event) {
    props.swiped(position.x)
  }

  function onSwipeEnd(event) {
    if (props.pixel > 80) {
      props.swiped(props.pixel)
      props.onSwipeHandler(props.question.id,true)
    }
    else if(props.pixel< -80){
      props.swiped(props.pixel)
      props.onSwipeHandler(props.question.id,false)
    }
    else{
      props.swiped(0)
    }
  }
  return (
    <Swipe
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      >  
      <div className={css.swipeItem}></div>
    </Swipe>
  );


}
export default SwipeItem
