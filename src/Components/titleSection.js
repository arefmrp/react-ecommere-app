import React from 'react';
import '../Styles/titleSection.css';


class TitleSection extends React.Component{
    render() {
        return(
            <div className='title-section'>
                <span className='title-section-title'>{this.props.title}</span>
                <span className='title-section-line'></span>
            </div>
        )
    }
}

export default TitleSection;