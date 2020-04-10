import React, { Component } from 'react';

/*
How to create ref on Component?
This way is usually used when you use DOM inside the component from the outside.
way that create ref on DOM is identical with create ref on Component
*/

class ScrollBox extends Component {
  /*
    will create method that moves scrollbar to the bottom.
    When you scroll down scrollbar using javascript you need to use
    values that DOM nodes have.
    - scrollTop: positon of vertical scrollbar(0 ~ 350)
    - scrollHeight: height of div inside scrollbox(650)
    - clientHeight: height of div that has scroll(300)
    */
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
        same with
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
        */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      postion: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div>
        <h1>* ref on Component</h1>
        <div
          style={style}
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle} />
        </div>
      </div>
    );
  }
}

export default ScrollBox;
