import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SingleCard from '../card/Card'
import ProgressBar from '../../styles/Progress'
import { imagesGame, Images } from '../../common/imgs'
import Button from '../../styles/Button'
import { displayResult } from '../../actions/results/displayResult'
import { MESSAGES } from '../../constants/messages'

interface Image {
  img: string
  matched: boolean
  id: number
}

function Game() {
  const [cards, setCards] = useState<Images[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<Image | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Image | null>(null)
  const [disabled, setDisabled] = useState(false)
  const [goal, setGoal] = useState(0)
  const [completed, setValue] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  

  // progressbar logic
  useEffect(() => {
   let interval: NodeJS.Timeout = setInterval(() => {
      if (isLoading) {
        setValue((oldValue: any) => {
          const newValue = oldValue + 10

          if (newValue < 100 && goal === 8) {
            clearInterval(interval)
            displayResult({
              color: MESSAGES.GREEN,
              message: MESSAGES.SUCCESS,
            })
            setIsBlocked(true)
            setLoading(false)
            generateCards()
            return 0
          }

          if (newValue < 100 && goal < 8) {
            return newValue
          }

          if (newValue === 100 && goal < 8) {
            setIsBlocked(true)
            displayResult({
              color: MESSAGES.RED,
              message: MESSAGES.FAIL,
            })
            setLoading(false)
            generateCards()
            clearInterval(interval)
            return 0
          }
        })
      }
    }, 3000)
  }, [isLoading])

  // Generate cadrs
  const generateCards = () => {
    isBlocked && setIsBlocked(false)
    isBlocked && displayResult({})
    const testCards: Array<Images> = [...imagesGame, ...imagesGame]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(testCards)
    setTurns(0)
    setGoal(0)
    setLoading(false)
  }

  // handle a choice
  const handleChoice = (card: Image) => {
    if (!isBlocked) {
      setLoading(true)
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  }

  // compare two selected  cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.img === choiceTwo.img) {
        setCards((prevCards): any => {
          return prevCards.map((card: Images) => {
            if (card.img === choiceOne.img) {
              setGoal(goal + 1)
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
    setDisabled(false)
  }

  // start a new game automatically
  useEffect(() => {
    generateCards()
  }, [])

  return (
    <>
      {isBlocked && (
        <Button onClick={() => generateCards()} label={MESSAGES.LABEL_BTN} />
      )}
      <Content>
        {cards.map((item: any) => (
          <SingleCard
            key={item.id}
            card={item}
            handleChoice={handleChoice}
            flipped={item === choiceOne || item === choiceTwo || item.matched}
            disabled={disabled}
          />
        ))}
      </Content>
      <ProgressBar bgcolor="red" completed={completed} />
      <p>
        Turns: {turns}, Goals: {goal}
      </p>
    </>
  )
}

export default Game

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`
