import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

import * as Styled from './styled';
// import styles from './styled';

function FilledInput({
  classes,
  value,
  onChange,
  label,
  type,
  placeholder,
  className
}) {
  return (
    <>
    <Styled.Label>HAHAHAH</Styled.Label>
    <Styled.Input></Styled.Input>
      {/* {
        label && (
          <InputLabel classes={{root: classes.label}}>
            {label}
          </InputLabel>
        )
      }
      <InputBase
        type={type}
        classes={{
          root: classes.root,
          input: classes.input,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      /> */}
    </>
  )
}

export default FilledInput;