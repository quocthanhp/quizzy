import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Form, SABox } from './styles';
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createQuestion } from '../../actions/questions';

const ShortAnswer = ({ setOpen }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const quizId = useSelector(store => store.questions.quizId)
    
    const [shortAnswer, setShortAnswer] = useState({
      question: '',
      type: 'shortAnswer',
      correctAnswer: [],
      incorrectAnswer: []
    })
    
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(createQuestion(shortAnswer, navigate, quizId))
    }

    return (
      <SABox>
        <Form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              color="#666666"
              align="center"
              marginRight="auto"
            >
              Write Question
            </Typography>

            <CloseIcon onClick={() => setOpen(false)} />
          </Box>

          <hr style={{ marginTop: "-3rem" }} />

          <Box display="flex" flexDirection="column" gap="2rem">
            <TextField
              required
              id="outlined-basic"
              label="Question"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setShortAnswer({ ...shortAnswer, question: e.target.value })
              }
            />
            <TextField
              required
              id="outlined-multiline-static"
              label="Answer"
              multiline
              rows="7"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setShortAnswer({ ...shortAnswer, correctAnswer: [...(shortAnswer.correctAnswer), e.target.value] })
              }
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="error"
            style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
          >
            Submit
          </Button>
        </Form>
      </SABox>
    );
}

export default ShortAnswer