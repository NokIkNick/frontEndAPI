import React from 'react'
import { useParams } from 'react-router-dom';
import { Question1 } from './Questions/Question1';
import { Question2 } from './Questions/Question2';
import { Question3 } from './Questions/Question3';
import { Question4 } from './Questions/Question4';
import { Question5 } from './Questions/Question5';
import { Question6 } from './Questions/Question6';
import { Question7 } from './Questions/Question7';
import { Question8 } from './Questions/Question8';
import { Question9 } from './Questions/Question9';
import { Question10 } from './Questions/Question10';
import { Question11 } from './Questions/Question11';
import { Question12 } from './Questions/Question12';
import { Question13 } from './Questions/Question13';

export const Question = () => {
    const params = useParams();

    const questionComponents = {
        1: <Question1 />,
        2: <Question2 />,
        3: <Question3 />,
        4: <Question4 />,
        5: <Question5 />,
        6: <Question6 />,
        7: <Question7 />,
        8: <Question8 />,
        9: <Question9 />,
        10: <Question10 />,
        11: <Question11 />,
        12: <Question12 />,
        13: <Question13 />
    }

  return (
    <>
        {questionComponents[params.questionId]}
    </>
  )
}
