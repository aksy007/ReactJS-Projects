import React,{useState} from 'react';

const CourseInfo = ()=>{

    const ReadMore = () => {

        const lessText = ()=>{
            return(
                <p>
                    You'll use limited information to make predictions – eliminating 
                    the impossible to uncover the truth. This course builds up to some 
                    truly mind-bending challenges!
                </p>
            );
        }
        const text = ()=>{
            return(
                <div className="readmoreText">
                    <p>
                        You'll use limited information to make predictions – eliminating 
                        the impossible to uncover the truth. This course builds up to some 
                        truly mind-bending challenges!
                    </p>
                    <p>
                        By the end of this course, you'll be able to spot logical fallacies, 
                        navigate some strategic game theory, understand machine logic, and use
                        the symbolic languages of logic to understand fun riddles.
                    </p>
                    
                    <h4 style={{"color":"black","margin-top":"20px","margin-bottom":"10px", "font-weight":"normal"}}>Topics Covered</h4>
                    
                    <div className="topics">
                        <span> Binary </span>
                        <span> Truth Table </span>
                        <span> Logic Gates </span>
                        <span> De Morgan's Law </span>
                        <span> Inclusive and Exclusive OR </span>
                        <span> Combinatorics </span>
                        <span> Venn and Euler Diagrams </span>
                        <span> Propositional Logic </span>
                        <span> The Square of Opposition </span>
                        <span> knight and Knave Puzzles </span>
                        <span> Combinatorial Game Algorithm </span>
                    </div>

                </div>
            );
        }

        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? lessText() : text()}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "Read more" : " Show less"}
            </span>
          </p>
        );
    };
    
    return(
        <div className="course-info">
            <h1>Logic</h1>
            <h3>Stretch your analytic muscles with knights, knaves, logic 
                gates, and more!
            </h3>
            <p>
                The beginning of our introductory math journey is Logic. Through 
                these challenging problem solving exercises, you'll construct the 
                critical thinking skills that are the basis for mathematical 
                reasoning.
            </p>

            <ReadMore>
                <p>
                    You'll use limited information to make predictions – eliminating 
                    the impossible to uncover the truth. This course builds up to some 
                    truly mind-bending challenges!
                </p>
            </ReadMore>
            
            <button className="prerequisites">
                view prerequisites and more
            </button>
        </div>
    );
}

export default CourseInfo;
