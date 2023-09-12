// import { Component } from 'react';
// import Box from './Box';
// import styles from '../../styles.module.scss';

// class Wrapper extends Component {
//     render() {
//         const contents = this.props.contents;
//         const box = contents.map((content, index) => (<Box key={index} content={content} />))

//         return (
//             <div className={styles.Wrapper} style={{ justifyContent: 'center' }}>
//                 {box}
//             </div>
//         );
//     }
// }

// export default Wrapper

import { Component } from 'react';
import Left from './Left';
import Right from './Right';
import styles from '../../styles.module.scss';

class Wrapper extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Wrapper} style={{ marginBottom: '3rem' }}>
                <Left content={content}></Left>
                <Right content={content}></Right>
            </div>
        );
    }
}

export default Wrapper;
