import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

// Styles
import styles from './Checklist.module.css'

// Services
import * as checklistService from '../../services/checklistService'

// Components
import EditChecklistForm from '../../components/EditChecklistForm/EditChecklistForm';

function Checklist(){
    const { id } = useParams()
    const [checklist, setChecklist] = useState({})

    useEffect(() => {
        const fetchChecklist = async () => {
            try {
                const checklist = await checklistService.getChecklistById(id)
                setChecklist(checklist)
            } catch (error) {
                throw error
            }
        }
        fetchChecklist()
        return () => { setChecklist(null) }
    }, [id])
    
    const handleEditChecklist = async (newChecklistData) => {
        try {
            const newChecklist = await checklistService.update(newChecklistData, id);
            setChecklist(newChecklist);
        } catch (error) {
            throw error
        }
    }

    return (
        <div className={styles.container}>
            <h1>{checklist.name} Checklist</h1>
            {checklist.name &&
                <EditChecklistForm
                checklist={checklist}
                handleEditChecklist={handleEditChecklist}
              />
            }
        </div>
    )
}

export default Checklist