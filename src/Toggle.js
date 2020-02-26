import React, { useState } from 'react';
import Dishform from './DishForm';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {isToggled && < Dishform />}
    </div>
  );
};

export default Toggle;

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
