import PropTypes from "prop-types";
import styles from './YoutubeVideo.module.css'

export const YoutubeVideo = (props) => {

    return (
        <div className={`${styles['video-responsive']}`}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${props.embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )

}

YoutubeVideo.propTypes = {
    embedId: PropTypes.string.isRequired
}
