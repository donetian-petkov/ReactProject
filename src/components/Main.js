import {MovieContent} from "./mainComponents/contentComponents/MovieContent";
import {NewsSection} from "./mainComponents/newsComponents/NewsSection";
import {CommentSection} from "./mainComponents/commentComponents/CommentSection";

export const Main = () => {

    return (
        <div id="main">
            <MovieContent />
            <NewsSection />
            <CommentSection />
            <div className="cl">&nbsp;</div>
        </div>
    )

}
