import dots from "../images/dots.JPG"
import classes from "./NewPost.module.css";

const posts = [];

const NewPost = (props) => {
    if (props.subjectValue !== undefined) posts.push(props.subjectValue);
        return (posts.map((post) => {
            return (
                post.includes(props.postValue) && (<span className={classes.posts}>
                    <h1>{post}</h1><hr />
                    {post.includes('Galapagos') &&
                    <p>`The Galápagos Islands is a volcanic islands in the Eastern Pacific, 
                        located around the Equator 900 km (560 mi) west of South America. 
                        They form the Galápagos Province of the Republic of Ecuador, with
                        a Spanish-speaking population of slightly over 33,000 (2020). 
                        The province is divided into the cantons of San Cristóbal, 
                        Santa Cruz, and Isabela, the three most populated islands in the chain.
                        The Galápagos are famous for their large number of endemic species,
                        which were studied by Charles Darwin in the 1830s and inspired his theory of evolution`
                    </p>}
                    {post.includes('Lake') &&
                    <p>`While purple, pink and blue-hued lupin flowers may not be native to new Zealand
                        , they really do seem to bloom most vibrantly on the Oceanian nation's South Island`
                    </p>}
                </span>))
        })
                    
        )
    }

export default NewPost;