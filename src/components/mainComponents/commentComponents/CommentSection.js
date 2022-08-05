import {CommentBox} from "./CommentBox";
import {Title} from "../Title";

export const CommentSection = () => {

    return (
        <div id="coming">
            <Title title="Latest Comments"/>
            <CommentBox />
            <div className="cl">&nbsp;</div>
            <CommentBox />
        </div>
    );

}
