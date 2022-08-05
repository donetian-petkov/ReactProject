import {MovieContent} from "./mainComponents/contentComponents/MovieContent";
import {NewsSection} from "./mainComponents/newsComponents/NewsSection";
import {ReviewSection} from "./mainComponents/reviewComponents/ReviewSection";

export const Main = () => {

    return (
        <div id="main">
            <MovieContent />
            <NewsSection />
            <ReviewSection />
            <div className="cl">&nbsp;</div>
        </div>
    )

}
