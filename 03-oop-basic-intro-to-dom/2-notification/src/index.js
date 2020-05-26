export default class NotificationMessage {

  element; // HTMLElement;
  notificationText;
  duration;
  type;

  constructor(
    notificationText = '',
    {duration = 10,
    type = 'error' }
              ) {
    this.notificationText = notificationText;
    this.duration = duration;
    this.type = type;
    this.initEventListeners();
    this.render();
  }

  initEventListeners() {
    document
      .getElementById('btn1')
      .addEventListener('click', () => {
        const notification = new NotificationMessage('Hello World',
          {
            duration: generateRandomNumber(10, 100),
            type:  Math.random() >= 0.5 ? 'success' : 'error'
          });
      });
  }

  show() {
/*
    const div1 = document.querySelector('div1');
    const btn1 = document.getElementById('btn1');
    this.insertAfter(btn1, div1);
*/

/*
    const notification = div1.querySelector('.notification');

    if (notification) {
      div1.removeChild()
      div1.append(this.element);
    }
*/
    const div1 = document.getElementById("div1");
    const notification = div1.querySelector('.notification');

    if (notification) {
      notification.remove();
    }

    if (this.duration){
      const context = this;
      setTimeout(() => context.remove(), this.duration);
    }
  }

  render() {

    const div1 = document.createElement("div",{"id": 'div1'});
    div1.innerHTML = ` <div class="notification success" style="--value:20s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
        ${this.notificationText}
      </div>
    </div>
  </div>
    `;
    this.element = div1.firstElementChild;
    const btn1 = document.getElementById('btn1');
    this.insertAfter(btn1, div1);
  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
    // additionally needed to remove all listeners...
    this.subElements = {};
    document.getElementById('btn1')
      .removeEventListener('click', () => {
        const notification = new NotificationMessage('Hello World',
          {
            duration: generateRandomNumber(1000, 4000),
            type:  Math.random() >= 0.5 ? 'success' : 'error'
          });
      });
  }

  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

}

export function generateRandomNumber (start, end) {
  return start + Math.random() * end;
}
