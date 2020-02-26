import styles from './Cell.module.scss';
import {Animated} from 'react-animated-css';

const Cell = props => {
    const getValue = () => {
        const {value} = props;
        if (!value.isRevealed)
            return props.value.isFlagged ? '🚩' : null;
        if (value.isMine)
            return '💣';
        if (value.neighbour === 0)
            return null;
        return value.neighbour;
    };
    const {value, onClick, cMenu} = props;
    let classNames = [styles.cell];

    if (!value.isRevealed)
        classNames.push(styles.hidden);

    if (value.isMine)
        classNames.push(styles.isMine);

    if (value.isFlagged)
        classNames.push(styles.isFlag);

    if (value.isRevealed && value.isMine)
        classNames.push(styles.red);

    return (
        < Animated;
    animationIn = 'zoomInDown';
    animationInDelay = {props.delay} >
        < div;
    onClick = {onClick};
    onContextMenu = {cMenu};
    className = {classNames.join(' ')} >
        {getValue()}
        < /div>
        < /Animated>;;
)
};
export default Cell;