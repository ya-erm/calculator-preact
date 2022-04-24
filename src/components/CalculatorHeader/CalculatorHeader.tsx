import { FunctionComponent as FC } from 'preact';
import { useStore } from '../../hooks/useStore';
// import { createUseStyles } from 'react-jss';
import { roundTo } from '../../model/Calculator';
import { $expression, $input } from '../../model/model';
import css from './CalculatorHeader.module.css';

const InputValue: FC = () => {
  const input = useStore($input);
  const number = Number(input);
  const value =
    isNaN(number) || input.endsWith('.') || /^\d+.*0+$/.test(input) ? input : roundTo(number, 10);
  return <>{value}</>;
};

const ExpressionValue: FC = () => {
  const expression = useStore($expression);
  return <>{expression}</>;
};

export const CalculatorHeader: FC = () => {
  // const css = useStyles();

  return (
    <div className={css.container}>
      <div className={css.inputMain} aria-label="input">
        <InputValue />
      </div>
      <div className={css.separator} />
      <div className={css.history} aria-label="history">
        <ExpressionValue />
      </div>
    </div>
  );
};

/*
const useStyles = createUseStyles({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 20,
  },
  inputMain: {
    fontSize: 30,
    textAlign: 'right',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'anywhere',
  },
  history: {
    textAlign: 'right',
    fontSize: 20,
    whiteSpace: 'pre-wrap',
    overflowWrap: 'anywhere',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    margin: '5px 0',
  },
});
*/
