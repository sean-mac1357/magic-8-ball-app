import {
    Card,
    CardHeader,
} from 'bloomer';
import Styled from 'styled-components';

const Div = Styled.div`
h1 { font-weight: 100; font-size: 2.5em;}
    
#content { 
 width: 600px; 
 margin: 0 auto; 
 margin-top: 50px; 
 border: 1px dotted aqua;
 text-align: center; 
 font-family: 'Helvetica Neue', arial; 
 font-weight: 100;
}

div.eight-ball {
  background-color: black;
  border: 1px solid black;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 30px;
}

div.answer {
  background-color: #333;
  border: 1px solid #333;
  border-radius: 50%;
  width: 50%;
  height: 50%;
  margin: 25% auto;
}

p#eight {
  font-size: 5em;
  margin: 20% auto;
  color: white;
}

p#answer {
  padding: 23px;
  color: aqua;
  letter-spacing: 2px;
  font-size:20px;
}

#question {
  margin: 10px;
  padding: 5px;
  width: 400px;
  font-size:48px;
  color: red;
}

#info {
  font-size: 22px;
}
`


const QuestionCard = (props) => {
    const { quest } = props;
    console.log("quest is: ", quest)

    return (
        <li>
                <Card>
                    <Div>
                    <div id="content">
                        <CardHeader className='is-flex is-justify-content-center'>
                        <h1 id="question">
                            {quest.magic.question}
                        </h1>
                        </CardHeader>
                        <div id="eight-ball" className="eight-ball">
                        <div className="answer">
                            <p id="answer">{quest.magic.answer}</p>
                        </div>
                        </div>
                    </div>
                    </Div>
                </Card>
        </li>
    )
}

export default QuestionCard;