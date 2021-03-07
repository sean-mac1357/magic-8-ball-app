import QuestionCard from './QuestionCard';

const UserCardList = (props) => {
    const { questionsArray } = props;
    console.log("questionsArray is: ", questionsArray)
    

    return (
        <ul>
            {questionsArray.map((quest, index) => (
                <QuestionCard quest={quest} key={index}/>
            ))}
        </ul>
    );
}

export default UserCardList;