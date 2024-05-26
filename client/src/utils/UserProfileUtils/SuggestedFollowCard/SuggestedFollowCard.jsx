import UsersTab from './UsersTab'

import css from './SuggestedFollowCard.module.css'
import { Button } from 'reactstrap'

let SuggestedFollowCard = ({name, data}) => {

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>{name}</div>
            <div className={css.body}>
                {data?.map((val, index) => {
                    return <UsersTab data={val} key={index} />
                })}
            </div>
            <Button
    
    color="warning"
    size="sm"className='ml-20 mt-3'
  >
    Show more
  </Button>
        </div>
    </div>
}

export default SuggestedFollowCard;