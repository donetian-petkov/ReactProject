import {ContentSection} from "./contentComponents/ContentSection";
import {NewsSection} from "./newsComponents/NewsSection";
import {ReviewSection} from "./reviewComponents/ReviewSection";

export const Main = () => {

    return (
        <div id="main">
            <ContentSection />
            <NewsSection />
            <ReviewSection />
            <div className="cl">&nbsp;</div>
        </div>
    )

}
