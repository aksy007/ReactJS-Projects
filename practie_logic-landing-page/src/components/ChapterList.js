import React from 'react';
import Quiz from './Quiz';

const ChapterList = (props)=>{
    const chapterInfo = props.chapter;
    const {title , chapterDetail, id , isLock} = props;
    return(
    <>
        <li className="chapter">
            <header className="container">
                <div className="chapter-number">
                    <span className="number">{id}</span>
                </div>
                <div className="chapter-name">
                    <div className="name">
                        <h2>{title}</h2>
                    </div>
                    <div className="detail">
                        <h5>{chapterDetail}</h5>
                    </div>
                </div>
            </header>
            <div className="quizzes">
                <div className="container">
                    <ul className="chapter-list">
                        {
                            chapterInfo.map(item =>{
                                return(
                                <Quiz 
                                    quizName = {item.quizName}
                                    quizImgSrc = {item.quizImgSrc}
                                    quizText = {item.quizText}
                                    isLock = {isLock}
                                    key = {item.id}
                                />
                            );
                            })
                        }
                    </ul>
                </div>
            </div>
        </li>
    </>
);
}

export default ChapterList;