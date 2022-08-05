import {MovieContent} from "./contentComponents/MovieContent";
import {NewsSection} from "./newsComponents/NewsSection";
import {ReviewSection} from "./reviewComponents/ReviewSection";

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
