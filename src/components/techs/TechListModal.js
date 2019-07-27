import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';



const TechListModal = () => {
    const [ techs, setTechs ] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }
    if (loading){
        return <Preloader/>;
    }


    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className='collection'>
                {!loading &&
                    techs !== null &&
                    techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
                </ul>
            </div>
    </div>
    )
}

export default TechListModal;
