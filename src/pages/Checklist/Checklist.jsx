import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

// Styles
import styles from './Checklist.module.css'

// Services
import * as checklistService from '../../services/checklistService'

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
        console.log(checklist)
        return () => { setChecklist(null) }
      }, [id])


    return (
        <div className={styles.container}>
            {console.log(checklist)}
            <h1>{checklist.name} Checklist</h1>
            {checklist.items?.map(item => (
                <ul>
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    )
}

export default Checklist