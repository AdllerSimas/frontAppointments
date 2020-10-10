import React, { useMemo } from 'react';
import { format } from 'date-fns'
import * as Style from './styles'

import { 
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaPaintBrush,
  FaLinkedin,
  FaTv,
  FaCamera,
  FaTwitter,
  FaYoutube

} from 'react-icons/fa'


function TaskCard({type, title, when, done}) {
  
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'))
  const time = useMemo(() => format(new Date(when), 'HH:mm'))
  
  return (
      <Style.Container done={done}>
        <Style.TopOfTop>
              {done  ? <FaCheck size='1.5em' color='#26d608'/> : null}
        </Style.TopOfTop>
        <Style.TopCard>
              {type === 1   ? <FaFacebook size='3em'       color='rgba(126,0,255,1)'/> : null}
              {type === 2   ? <FaInstagram size='3em' color='rgba(126,0,255,1)'/> : null}
              {type === 3   ? <FaPaintBrush size='3em'     color='rgba(126,0,255,1)'/> : null}
              {type === 4   ? <FaLinkedin size='3em'     color='rgba(126,0,255,1)'/> : null}
              {type === 5   ? <FaTv size='3em'      color='rgba(126,0,255,1)'/> : null}
              {type === 6   ? <FaCamera size='3em'       color='rgba(126,0,255,1)'/> : null}
              {type === 7   ? <FaTwitter size='3em'   color='rgba(126,0,255,1)'/> : null}
              {type === 8   ? <FaYoutube size='3em'      color='rgba(126,0,255,1)'/> : null}
              <h3>{title}</h3>
        </Style.TopCard>
        <Style.BottomCard>
              <strong>{date}</strong>
              {/* <span>{time}h</span> */}
        </Style.BottomCard>
      </Style.Container>
  )
}

export default TaskCard;